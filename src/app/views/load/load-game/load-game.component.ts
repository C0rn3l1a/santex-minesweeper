import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.scss']
})
export class LoadGameComponent implements OnInit {
    save_slots: BehaviorSubject<any[]>; // subject emits the list of save slots
    selected_slot: number; // slot number to be loaded
    used_slots: number[]; // slot numbers already in use

    constructor(private _game_service: GameService, private _router: Router) {
        this.save_slots = this._game_service.save_slots;
        this._game_service.save_slots.subscribe(saved_slots => {
            // creates a list of used game slots
            this.used_slots = saved_slots.filter(slot => slot.game).map(slot => slot.slot)
        })
    }

    ngOnInit(): void {}

    /**
     * @author N4cho!
     * @description returns true if selected slot is already in use or false if not
     * @readonly
     * @memberof LoadGameComponent
     */
    get used_slot(){
        return this.used_slots.includes(this.selected_slot);
    }

    /**
     * @author N4cho!
     * @description sends the slot to be loaded to the service and redirects the user to the game view
     * @memberof LoadGameComponent
     */
    load() {
        this._game_service.load_game(this.selected_slot);
        this._router.navigate(['/game/board']);
    }
}