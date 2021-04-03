import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenuService } from './app.menu.service';
import {MenuItem} from 'primeng/api';
import { BreadCrumbItemsService } from 'src/app/_shared/bread-crumb-items.service';
@Component({
  selector: 'app-assign',
  templateUrl: './assignment-layout.compnent.html',
  styleUrls: ['./assignment-layout.compnent.css']
})
export class AssignmentLayoutComponent implements OnInit
{
// for breabcrumb
   mitems : MenuItem[];
    
    home: MenuItem;
    
 items: any[];
 layoutMode = 'slim';

 overlayMenuActive: boolean;

 staticMenuDesktopInactive: boolean;

 staticMenuMobileActive: boolean;

 layoutMenuScroller: HTMLDivElement;

 lightMenu = true;

 topbarColor = 'layout-topbar-blue';

 menuClick: boolean;

 userMenuClick: boolean;

 notificationMenuClick: boolean;

 rightMenuClick: boolean;

 resetMenu: boolean;

 menuHoverActive: boolean;

 topbarUserMenuActive: boolean;

 topbarNotificationMenuActive: boolean;

 rightPanelMenuActive: boolean;

 inlineUser: boolean = false;

 isRTL: boolean = false;

 configActive: boolean;

 configClick: boolean;

 profileClick: boolean;

 inlineUserMenuActive = false;

 inputStyle: string = "outlined";

 ripple: boolean = true;


 usertype:number=0;


 constructor(private router: Router,private menuService: MenuService, private primengConfig: PrimeNGConfig,private breadCruSer: BreadCrumbItemsService) { }
  ngOnInit(): void {

    this.usertype=Number(localStorage.getItem('usertype'))||0;
this.breadCruSer.getMenuItemObs().subscribe(mitems => this.mitems = mitems);
    
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  
  
  
  
    this.primengConfig.ripple = true;
/*     window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop; */

/* function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} */
    this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Search',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Filter',
                      icon:'pi pi-fw pi-filter',
                      items:[
                          {
                              label:'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      icon:'pi pi-fw pi-bars',
                      label:'List'
                  }
                  ]
              }
          ]
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      }
  ];

  }




  onLayoutClick() {
    if (!this.userMenuClick) {
        this.topbarUserMenuActive = false;
    }

    if (!this.notificationMenuClick) {
        this.topbarNotificationMenuActive = false;
    }

    if (!this.rightMenuClick) {
        this.rightPanelMenuActive = false;
    }

    if (!this.profileClick && this.isSlim()) {
        this.inlineUserMenuActive = false;
    }

    if (!this.menuClick) {
        if (this.isHorizontal() || this.isSlim()) {
            this.menuService.reset();
        }

        if (this.overlayMenuActive || this.staticMenuMobileActive) {
            this.hideOverlayMenu();
        }

        this.menuHoverActive = false;
        this.unblockBodyScroll();
    }

    if (this.configActive && !this.configClick) {
        this.configActive = false;
    }

    this.configClick = false;
    this.userMenuClick = false;
    this.rightMenuClick = false;
    this.notificationMenuClick = false;
    this.menuClick = false;
    this.profileClick = false;
}

onMenuButtonClick(event) {
    this.menuClick = true;
    this.topbarUserMenuActive = false;
    this.topbarNotificationMenuActive = false;
    this.rightPanelMenuActive = false;

    if (this.isOverlay()) {
        this.overlayMenuActive = !this.overlayMenuActive;
    }

    if (this.isDesktop()) {
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
        this.staticMenuMobileActive = !this.staticMenuMobileActive;
        if (this.staticMenuMobileActive) {
            this.blockBodyScroll();
        } else {
            this.unblockBodyScroll();
        }
    }

    event.preventDefault();
}

onMenuClick(event) {
    this.menuClick = true;
    this.resetMenu = false;
}

onTopbarUserMenuButtonClick(event) {
    this.userMenuClick = true;
    this.topbarUserMenuActive = !this.topbarUserMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
}

onTopbarNotificationMenuButtonClick(event) {
    this.notificationMenuClick = true;
    this.topbarNotificationMenuActive = !this.topbarNotificationMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
}

onRightMenuClick(event) {
    this.rightMenuClick = true;
    this.rightPanelMenuActive = !this.rightPanelMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
}

onProfileClick(event) {
    this.profileClick = true;
    this.inlineUserMenuActive = !this.inlineUserMenuActive;
}

onTopbarSubItemClick(event) {
    event.preventDefault();
}

onConfigClick(event) {
    this.configClick = true;
}

onRippleChange(event) {
    this.ripple = event.checked;
}

isHorizontal() {
    return this.layoutMode === 'horizontal';
}

isSlim() {
    return this.layoutMode === 'slim';
}

isOverlay() {
    return this.layoutMode === 'overlay';
}

isStatic() {
    return this.layoutMode === 'static';
}

isMobile() {
    return window.innerWidth < 1025;
}

isDesktop() {
    return window.innerWidth > 896;
}

isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
}

hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
}

blockBodyScroll(): void {
    if (document.body.classList) {
        document.body.classList.add('blocked-scroll');
    } else {
        document.body.className += ' blocked-scroll';
    }
}

unblockBodyScroll(): void {
    if (document.body.classList) {
        document.body.classList.remove('blocked-scroll');
    } else {
        document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
            'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}





}
