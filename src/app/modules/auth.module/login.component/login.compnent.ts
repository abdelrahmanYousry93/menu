
import { Component, OnInit } from '@angular/core';
//import { Global } from 'src/app/shared/global';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from '../auth.services/user.service';
import { Global } from '../../../_shared/Global';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'auth-login',
  templateUrl: './login.compnent.html',
  styleUrls: []
})
export class LoginComponent  implements OnInit{
  UserName:any="";
  msgs: Message[] = [];
  Password:any="";
  isLoading: boolean = false;
  msg:any="";
  images: any[]=[];
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor( private _apiService: UserService, private router:Router,private messageService: MessageService,private ngxService: NgxUiLoaderService ) { }
  ngOnInit(): void {
/* 
    <div class="item active slider-2">
    <img src="assets/images/login-slide-2.jpg" alt="MiClinic">
</div>
<div class="item slider-1">
    <img src="assets/images/login-slide-1.jpg" alt="Workspace/VNA">
</div>

<div class="item slider-3">
    <img src="assets/images/login-slide-3.jpg" alt="MiERP">
</div> */

this.images.push({
  previewImageSrc: "assets/images/login-slide-2.jpg",
  thumbnailImageSrc: "assets/images/login-slide-2.jpg",
  alt: "MiClinic",
  title: "MiClinic"
});


this.images.push({
  previewImageSrc: "assets/images/login-slide-1.jpg",
  thumbnailImageSrc: "assets/images/login-slide-1.jpg",
  alt: "Workspace/VNA",
  title: "Workspace/VNA"
});

this.images.push({
  previewImageSrc: "assets/images/login-slide-3.jpg",
  thumbnailImageSrc: "assets/images/login-slide-3.jpg",
  alt: "MiERP",
  title: "MiERP"
});

     if(JSON.parse(localStorage.getItem("token"))!=undefined)
    {
      if(JSON.parse(localStorage.getItem("usertype"))!=undefined)
      {
        if(JSON.parse(localStorage.getItem("usertype"))==0)
        this.router.navigate(['/assignment/doctorAssignment']); 
        else
        this.router.navigate(['/assignment/studentsAssignment']); 

      }
    } 

  }





  EncryptePassword(stringToEncrypt)
  {
    var key = CryptoJS.enc.Utf8.parse('8056483646328763');
    var iv = CryptoJS.enc.Utf8.parse('8056483646328763');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(stringToEncrypt), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
        return encrypted;
  }

  onSubmit() 
  {

    if(this.UserName==""||this.Password=="")
    {
this.addSingle("Please Fill User Name And Password","error","error")
this.msg="Please Fill User Name And Password";  
return;
    }
    this.ngxService.start();
  let pass=  this.EncryptePassword(this.Password);
      this.isLoading = true;
        this._apiService.post(Global.Base_Service_URL+"Users/login", {Data:{UserName:this.UserName,Password:pass,UserType:2}}).subscribe(
            data => {
           this.ngxService.stop();
                  if (data != null) 
                {
                    if (data.status=="200") {
                      localStorage.setItem("token", JSON.stringify(data.data.token));
                      localStorage.setItem("id", JSON.stringify(data.data.accountIncId));
                      localStorage.setItem("username", JSON.stringify(data.data.accountUserName));
                      localStorage.setItem("usertype", JSON.stringify(data.data.userType));
                      localStorage.setItem("firstname", JSON.stringify(data.data.firstName));
                       /* this.isLoading = false;
                       sessionStorage.setItem("IsActive","true");*/
                       if(data.data.userType==0)
                       this.router.navigate(['/assignment/DashBoard']); 
                       else
                       this.router.navigate(['/assignment/StudentDashBoard']); 

                       
                    }
                    else {
                  this.addSingle(JSON.stringify(data.message) , "error", "error");
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
