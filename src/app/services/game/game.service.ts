import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Game } from './game.interface';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    /**
     * @author N4cho!
     * @description BehaviorSubject that emits the current game being played
     * @type {BehaviorSubject<Game>}
     * @memberof GameService
     */
    current_game: BehaviorSubject<Game> = new BehaviorSubject(null);
    /**
     * @author N4cho!
     * @description BehaviorSubject that emits the list of save slots with their respective games inside
     * @type {BehaviorSubject<any[]>}
     * @memberof GameService
     */
    save_slots: BehaviorSubject<any[]>;
    /**
     * @author N4cho!
     * @description BehaviorSubject that emits the hisotry of played games
     * @type {BehaviorSubject<Game[]>}
     * @memberof GameService
     */
    game_history: BehaviorSubject<Game[]>;

    constructor() {
        /* 
            The list of saved games and the history are retrieved from the localstorage or generates empty ones if they are not existent
            Http calls to a backend service could be implemented here but for this example localstorage will have to be enough
        */
        let save_slots: any = localStorage.getItem('minesweeper_save_slots');
        let game_history: any = localStorage.getItem('minesweeper_game_history');
        // SAVE SLOTS
        if(!save_slots) {
            save_slots = [];
            for(const slot of [1,2,3,4,5]) {
                save_slots.push({slot, game:null});
            }
            localStorage.setItem('minesweeper_save_slots',JSON.stringify(save_slots));
        } else {
            save_slots = JSON.parse(save_slots);
        }
        // GAME HISTORY
        if(!game_history) {
            game_history = [];
            localStorage.setItem('minesweeper_save_slots',JSON.stringify(game_history));
        } else {
            game_history = JSON.parse(game_history);
            game_history.map(game => {
                game.start_time = moment(game.start_time);
                game.end_time = moment(game.end_time);
            })
        }
        this.save_slots = new BehaviorSubject(save_slots);
        this.game_history = new BehaviorSubject(game_history);
        this.save_slots.subscribe(save_slots => {
            localStorage.setItem('minesweeper_save_slots',JSON.stringify(save_slots));
        })
        this.game_history.subscribe(game_history => {
            game_history.map(game => {
                game.start_time.toISOString();
                game.end_time.toISOString();
            })
            localStorage.setItem('minesweeper_game_history',JSON.stringify(game_history));
        })
    }

    /**
     * @author N4cho!
     * @description takes the settings for a game and generates a game object that is composed primarily of:
     *  - **width**: *width of the board*
     *  - **heigth**: *heigth of the board*
     *  - **difficulty**: *difficulty of the game*
     *  - **mines**: *list of coordinates where mines are placed*
     *  - **flags**: *list of coordinates where flags are placed*
     *  - **board**: *matrix where cells are going to be uncovered*
     *  - **state**: *indicates if game is being currently played, is won or lost*
     * 
     *  the object is sent to the **current_game** subject
     * @param {number} width - width of the board
     * @param {number} heigth - heigth of the board
     * @param {string} difficulty - difficulty of the game
     * @memberof GameService
     */
    start_game(width: number, heigth: number, difficulty: string) {
        let mines = []
        const ratio = {
            'easy': 1/9,
            'medium': 1/6,
            'hard': 1/4,
        }
        for(let y = 0; y < heigth; y++) {
            for(let x = 0; x < width; x++) {
                if(Math.random() < ratio[difficulty]) {
                    mines.push({ x, y });
                }
            }
        }

        this.current_game.next({
            name: '',
            width,
            heigth,
            difficulty,
            mines,
            start_time: moment(),
            end_time: null,
            total_time: null,
            flags: [],
            state: 'playing',
            board: Array(heigth).fill(null).map(() => Array(width).fill(null))
        });
    }

    /**
     * @author N4cho!
     * @description saves the current in the provided slot number with the provided save slot and updates the slot list so it's saved
     * @param {numbewr} save_slot
     * @param {string} name
     * @memberof GameService
     */
    save_game(save_slot, name) {
        this.current_game.pipe(take(1)).subscribe(game => {
            game.name = name;
            this.save_slots.pipe(take(1)).subscribe(save_slots => {
                const index = save_slots.findIndex(({slot}) => slot === save_slot);
                save_slots[index].game = game;
                this.save_slots.next(save_slots);
            });
        });
    }

    /**
     * @author N4cho!
     * @description Loads the game saved in the provided save slot and send it to the **current_game** subject
     * @param {*} save_slot
     * @memberof GameService
     */
    load_game(save_slot) {
        this.save_slots.pipe(take(1)).subscribe(save_slots => {
            const index = save_slots.findIndex(({slot}) => slot === save_slot);
            this.current_game.next(save_slots[index].game);
        });
    }

    /**
     * @author N4cho!
     * @description saves the provided game to the history list after setting it's end_time and updates the history list so it's saved
     * @param {Game} game
     * @memberof GameService
     */
    regtister_game(game: Game) {
        game.end_time = moment();
        this.game_history.pipe(take(1)).subscribe(game_history => {
            game_history.push(game);
            this.game_history.next(game_history);
        })
    }
}
