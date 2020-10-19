import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/services/game/game.interface';
import { GameService } from 'src/app/services/game/game.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

    /**
     * @author N4cho!
     * @description current game object
     * @type {Game}
     * @memberof BoardComponent
     */
    game: Game

    constructor(private _game_service: GameService, private _router: Router) { }

    ngOnInit(): void {
        // if there is no game, redirect the user to the main menu
        this._game_service.current_game.subscribe(game => {
            if(game) {
                this.game = game
            } else {
                this._router.navigate(['/'])
            }
        })
    }

    /**
     * @author N4cho!
     * @description method excecuted when you press a clickable cell, if it is a mine you lose, if not the cell is uncovered and if there is no mine adjacent to the cell it "presses" all cells adjacent
     * @param {number} x
     * @param {number} y
     * @memberof BoardComponent
     */
    press(x, y) {
        const mine = this.game.mines.find(mine => mine.x === x && mine.y === y);
        if(mine) {
            this.game.board[y][x] = 'mine';
            this.lose()
        } else {
            let neighbors = this.get_neighbors(x, y);
            this.game.board[y][x] = neighbors.mines;
            
            if(neighbors.mines === 0) {
                for(const spread of neighbors.spread){
                    setTimeout(() => {
                        this.press(spread.x, spread.y);
                    }) // gives a nicer effect
                }
            }
            this.check_game();
        }
    }
    
    /**
     * @author N4cho!
     * @description method excecuted when a cell is right clicked, it puts a flag or removes a flag from the cell
     * @param {number} x
     * @param {number} y
     * @memberof BoardComponent
     */
    flag(x, y) {
        if(this.game.board[y][x] === 'flag') {
            this.game.board[y][x] = null;
            let index = this.game.flags.findIndex(flag => flag.x === x && flag.y === y);
            this.game.flags.splice(index, 1);
        } else {
            this.game.board[y][x] = 'flag';
            this.game.flags.push({x, y});
        }
    }

    /**
     * @author N4cho!
     * @description method excecuted when a mine is clicked, sets state to "lost" and registers game to history
     * @memberof BoardComponent
     */
    lose() {
        this.game.state = 'lost';
        this._game_service.regtister_game(this.game);
    }
    /**
     * @author N4cho!
     * @description method excecuted when all non mine cells are clicked, sets state to "won" and registers game to history
     * @memberof BoardComponent
     */
    win() {
        this.game.state = 'won';
        this._game_service.regtister_game(this.game);
    }

    /**
     * @author N4cho!
     * @description returns the number of adjacent mines and the list of clickeable cells arround the cell
     * @private
     * @param {number} X
     * @param {number} Y
     * @returns {mines: number, spread: {x:number, y:number}[]}
     * @memberof BoardComponent
     */
    private get_neighbors(X, Y) {
        const xs = [X-1, X, X+1];
        const ys = [Y-1, Y, Y+1];
        let spread = [];
        let mines = 0;
        for(const y of ys) {
            for(const x of xs) {
                if((x !== X || y !== Y) && (-1 < x && x < this.game.width) && (-1 < y && y < this.game.heigth)) {
                    const mine = this.game.mines.find(mine => mine.x === x && mine.y === y);
                    if(mine) {
                        mines++;
                    } else if(this.game.board[y][x] === null) {
                        spread.push({x, y});
                    }
                }
            }
        }
        return {mines, spread}
    }

    /**
     * @author N4cho!
     * @description checks if the game is won and excecutes win method
     * @private
     * @memberof BoardComponent
     */
    private check_game() {
        let won = true;
        for(let y = 0; y < this.game.board.length; y++) {
            for(let x = 0; x < this.game.board[y].length; x++) {
                const mine = this.game.mines.find(mine => mine.x === x && mine.y === y);
                if(this.game.board[y][x] === null && !mine) {
                    won = false;
                }
            }
        }
        if(won) {
            this.win();
        }
    }

    /**
     * @author N4cho!
     * @description starts a new game with the same settings as the current one
     * @memberof BoardComponent
     */
    reset() {
        this._game_service.start_game(this.game.width, this.game.heigth, this.game.difficulty);
    }

    /**
     * @author N4cho!
     * @description redirects the user to the save view
     * @memberof BoardComponent
     */
    save() {
        this._router.navigate(['/game/save']);
    }
    
    /**
     * @author N4cho!
     * @description redirects the user to the main menu view
     * @memberof BoardComponent
     */
    main_menu() {
        this._router.navigate(['/']);
    }

}
