import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameService } from 'src/app/services/game/game.service';
import * as moment from 'moment';
import { Game } from 'src/app/services/game/game.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    /**
     * @author N4cho!
     * @description the columns that are to be displayed in the table
     * @type {{key:string, label:string}[]}
     * @memberof TableComponent
     */
    columns: {key:string, label:string}[] = [
        {key: 'state', label: 'Status'},
        {key: 'difficulty', label: 'Difficulty'},
        {key: 'start_time', label: 'Start Time'},
        {key: 'end_time', label: 'End Time'},
        {key: 'total_time', label: 'Total time spent'},
    ]

    /**
     * @author N4cho!
     * @description Observable emits the array of played games
     * @type {Observable<Game[]>}
     * @memberof TableComponent
     */
    game_history: Observable<Game[]>;

    constructor(private _game_service: GameService) { }

    ngOnInit(): void {
        this.game_history = this._game_service.game_history.
        pipe(map((game_history: any[]) => game_history.map(game => {
            // array of games is formatted and total_time is calculated
            const start = moment(game.start_time);
            const end = moment(game.end_time);
            const total_time = moment.duration(end.diff(start));
            game.start_time = start.format('MM-DD-YYYY hh:mm A');
            game.end_time = end.format('MM-DD-YYYY hh:mm A');
            game.total_time = total_time.humanize();
            return game;
        })))    
    }

}
