import { AboutUsService } from './about-us.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutUs',
    templateUrl: './aboutUs.component.html',
    styleUrls: ['./aboutUs.component.css']
})

export class aboutUsComponent implements OnInit {
    constructor(
        private AboutUsService: AboutUsService
    ) { }

    ngOnInit() { }
}