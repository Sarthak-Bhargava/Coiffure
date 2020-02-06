import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Services',
    templateUrl: './Services.component.html',
    styleUrls:['./Services.component.css']
})

export class ServicesComponent implements OnInit {
    constructor(
        private ServicesService:ServicesService
    ) { }

    ngOnInit() { }
}