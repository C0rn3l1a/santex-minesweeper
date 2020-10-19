import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        /*
        Router Change Animations: 
            the current view card goes down and the new view card comes up
        */
        trigger('routeAnimations', [
            transition('* <=> *', [
                group([
                    query(':enter', [
                        style({ opacity: 0, position: 'fixed', transform:'translateY(100%)' }),
                        stagger(1350,[
                            animate('250ms ease-in-out', style({ opacity: 1, transform:'translateY(0%)' })),
                        ]),
                    ],{optional: true}),
                    query(':leave', [
                        style({ opacity: 1, position: 'fixed', transform:'translateY(0%)' }),
                        animate('250ms ease-in-out', style({ opacity: 0, position: 'fixed', transform:'translateY(100%)' }))
                    ],{optional: true})
                ])
            ])
        ])]
})
export class AppComponent {
    /**
     * @author N4cho!
     * @description returns the url of the current route trigger a change of state for the animation (!keep an eye for version changes)
     * @param {*} outlet
     * @returns
     * @memberof AppComponent
     */
    getState(outlet) {
        if(outlet.isActivated){
            return outlet.activatedRoute.snapshot._routerState.url;
        }
    }
}
