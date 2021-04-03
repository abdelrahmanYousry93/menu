
import { Component, OnInit } from '@angular/core';
//import { Global } from 'src/app/shared/global';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from '../auth.services/user.service';
import { Global } from '../../../_shared/Global';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'auth-exlogin',
  templateUrl: './external.login.component.html',
  styleUrls: []
})
export class exLoginComponent  implements OnInit{
  UserName:any="";
  msgs: Message[] = [];
  Password:any="";
  isLoading: boolean = false;
  msg:any="";

  
  constructor( private _apiService: UserService, private router:Router,private messageService: MessageService,private ngxService: NgxUiLoaderService ) { }
  ngOnInit(): void 
  {
      debugger
this.UserName=document.cookie.split(',')[0];
this.Password=document.cookie.split(',')[1];
this. onSubmit() ;
  }





  onSubmit() 
  {


    this.ngxService.start();
  
      this.isLoading = true;
      debugger
        this._apiService.post(Global.Base_Service_URL+"Users/exlogin", {Data:{UserName:this.UserName,Password:this.Password,UserType:2}}).subscribe(
            data => {
           this.ngxService.stop();
debugger
                  if (data != null) 
                {
                    if (data.status=="200") {
                      localStorage.setItem("token", JSON.stringify(data.data.token));
                      localStorage.setItem("id", JSON.stringify(data.data.accountIncId));
                      localStorage.setItem("username", JSON.stringify(data.data.accountUserName));
                      localStorage.setItem("usertype", JSON.stringify(data.data.userType));
                       /* this.isLoading = false;
                       sessionStorage.setItem("IsActive","true");*/
                       if(data.data.userType==0)
                       this.router.navigate(['/assignment/doctorAssignment']); 
                       else
                       this.router.navigate(['/assignment/studentsAssignment']); 

                       
                    }
                    else {
                  this.addSingle(JSON.stringify(data.message) , "error", "error");
                  this.router.navigate(['/login']); 

                this.msg=JSON.stringify(data.message);
                this.UserName="";this.Password="";
                        this.isLoading = false;
                    }
                }
                else {
                 this.addSingle("Error Try Again" , "Error", "error");
                 this.msg="Error Try Again";
                 this.UserName="";this.Password="";
                    this.isLoading = false;
                }
            },
            error => {
              this.msg="fail to login";
              this.addSingle(this.msg, "Error", "error");
              this.UserName="";this.Password="";
                this.isLoading = false;
            }


        );
    }

  addSingle(textmsg: string, sumary: string, severity: string) {
    this.messageService.add({key: 'bc', severity:severity, summary: sumary, detail: textmsg});
  }


}
