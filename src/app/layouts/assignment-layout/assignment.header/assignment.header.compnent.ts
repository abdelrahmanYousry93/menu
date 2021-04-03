import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentLayoutComponent } from '../assignment-layout.compnent';

@Component({
  selector: 'assign-header',
  templateUrl: './assignment.header.compnent.html',
  styleUrls: ['./assignment.header.compnent.css']
})
export class AssignmentHeaderComponent 
{
  items: any[];

 constructor(private router: Router,public app: AssignmentLayoutComponent) { }
username:string="";

  ngOnInit(): void {
if(localStorage.getItem("firstname"))
this.username=JSON.parse(localStorage.getItem("firstname"));

    this.items = [
      {
      
          label:'Quit',
          icon:'pi pi-fw pi-power-off',
          command:  (event: Event) => { this.Logout() }
      }
  ];

  }


  Logout(){
    localStorage.removeItem("token");
/*     localStorage.removeItem("role");
    localStorage.removeItem("userType"); */
    this.router.navigateByUrl('login');
  }

}
