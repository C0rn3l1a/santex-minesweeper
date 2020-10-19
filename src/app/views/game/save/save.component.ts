import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GameService } from 'src/app/services/game/game.service';

@Component({
    selector: 'app-save',
    templateUrl: './save.component.html',
    styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

    save_slots: BehaviorSubject<any[]>;// subject emits the list of save slots
    selected_slot: number;// slot number to be loaded
    used_slots: number[];// slot numbers already in use
    name: string = '';// name of the game to be saved

    constructor(private _game_service: GameService, private _router: Router) {
        this.save_slots = this._game_service.save_slots;
        this._game_service.save_slots.subscribe(saved_slots => {
            // creates a list of used game slots
            this.used_slots = saved_slots.filter(slot => slot.game).map(slot => slot.slot)
        })
    }

    ngOnInit(): void {
        this._game_service.current_game.subscribe(game => {
            if(!game) {
                // if there is no game in progress, the user is redirected to the main menu
                this._router.navigate(['/'])
            }
        })
    }

    /**
     * @author N4cho!
     * @description returns true if there is a name and a selected save slot
     * @readonly
     * @memberof SaveComponent
     */
    get allow(){
        return this.name.trim() !== '' && this.selected_slot != null;
    }
    
    /**
     * @author N4cho!
     * @description returns true if selected slot is already in use or false if not
     * @readonly
     * @memberof SaveComponent
     */
    get used_slot(){
        return this.used_slots.includes(this.selected_slot);
    }

    /**
     * @author N4cho!
     * @description sends slot number and game name to the service to be saved and redirects the user back to the game
     * @memberof SaveComponent
     */
    save() {
        this._game_service.save_game(this.selected_slot, this.name);
        this._router.navigate(['/game/board']);
    }

}
