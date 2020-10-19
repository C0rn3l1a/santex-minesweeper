import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'minesweeper-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    show_back = false;

    constructor(private _location: Location) { }

    ngOnInit(): void {
        this._location.onUrlChange(url => {
            if(url === '/menu') {
                this.show_back = false;
            } else {
                this.show_back = true;
            }
        });
    }

    goback() {
        this._location.back();
    }

}
