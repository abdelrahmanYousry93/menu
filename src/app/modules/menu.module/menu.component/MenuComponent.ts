import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import {resturant} from '../model/menu'
declare var $;

@Component({
    selector: 'app-menu',
    templateUrl: './menucomponent.html',
    styleUrls: []
})
export class MyMenuComponent implements OnInit {
    resturant:resturant=new resturant;
    constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService, private ngxService: NgxUiLoaderService, private confirmationService: ConfirmationService, private httpClient: HttpClient) {
    }

    ngOnInit() {
        setInterval(() => {
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                responsive:{
                    0:{
                        items:3
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })
            
          }, 500);

     }




}
