import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/services/game/game.interface';
import * as moment from 'moment';

@Pipe({
    name: 'tableorder'
})
export class TableOrderPipe implements PipeTransform {

    transform(game_history: Observable<Game[]>, order: { column: string, direction: string }) {
        return game_history.pipe(map(game_list => {
            switch(order.column){
                case 'start_time':
                case 'end_time':
                    // order using moment objects
                    if(order.direction === 'ASC') {
                        game_list.sort((a,b) => {
                            let A = moment(a[order.column]);
                            let B = moment(b[order.column]);
                            return A.unix() - B.unix();
                        })
                    } else {
                        game_list.sort((a,b) => {
                            let A = moment(a[order.column]);
                            let B = moment(b[order.column]);
                            return B.unix() - A.unix();
                        })
                    }
                    break;

                case 'total_time':
                    // order using moment duration objects
                    if(order.direction === 'ASC') {
                        game_list.sort((a, b) => {
                            return a.total_time - b.total_time;
                        })
                    } else {
                        game_list.sort((a, b) => {
                            return b.total_time - a.total_time;
                        })
                    }
                    break;
            
                case 'difficulty':
                    const diff_value = {easy:1, medium:2, hard:3};
                    if(order.direction === 'ASC') {
                        game_list.sort((a, b) => {
                            return diff_value[a.difficulty] - diff_value[b.difficulty];
                        })
                    } else {
                        game_list.sort((a, b) => {
                            return diff_value[b.difficulty] - diff_value[a.difficulty];
                        })
                    }
                    break;
                
                case 'state':
                    let state_value = {lost:1, won:2};
                    if(order.direction === 'ASC') {
                        game_list.sort((a, b) => {
                            return state_value[a.state] - state_value[b.state];
                        })
                    } else {
                        game_list.sort((a, b) => {
                            return state_value[b.state] - state_value[a.state];
                        })
                    }
                    break;
            }
            return game_list;
        }))
    }

}
