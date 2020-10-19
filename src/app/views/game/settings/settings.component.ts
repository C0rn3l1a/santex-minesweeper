import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { take } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    difficulty = 'easy';// difficulty of the new game, can be 'esay' 'medium' or 'hard'
    width: number; // number of cells for the width of the board
    heigth: number; // number of cells for the heigth of the board

    constructor(private _game_service: GameService, private _router: Router) { }

    ngOnInit(): void {
    }

    /**
     * @author N4cho!
     * @description generates a random size for the board, constants are arbitrary and could be tweaked to better fit the desired sizes nature
     * @memberof SettingsComponent
     */
    generate_random_size() {
        this.width = Math.floor(Math.random() * 20 + 7)
        this.heigth = Math.floor(Math.random() * 10 + 7)
    }

    /**
     * @author N4cho!
     * @description sends settings to the service to start a new game and when it's created redirects user to game board view
     * @memberof SettingsComponent
     */
    start_game() {
        this._game_service.current_game.pipe(take(1)).subscribe(() => {
            this._router.navigate(['/game/board']);
        })
        this._game_service.start_game(this.width, this.heigth, this.difficulty)
    }

}
