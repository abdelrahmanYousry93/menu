import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
declare var $;

@Component({
    selector: 'app-item',
    templateUrl: './menu.item.component.html',
    styleUrls: []
})
export class MyMenuItemComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService, private ngxService: NgxUiLoaderService, private confirmationService: ConfirmationService, private httpClient: HttpClient) {
    }

    ngOnInit() {

     

     }




}
