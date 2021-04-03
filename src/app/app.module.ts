import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input'; */
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { AuthFooterComponent } from './layouts/auht-layout/auth.footer/auth.footer';
import { AuthHeaderComponent } from './layouts/auht-layout/auth.header/auth.header';
import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';
import { AuthInterceptor } from './_shared/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderService, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AssignmentLayoutComponent } from './layouts/assignment-layout/assignment-layout.compnent';
import { AssignmentHeaderComponent } from './layouts/assignment-layout/assignment.header/assignment.header.compnent';
import { AssignmentFooterComponent } from './layouts/assignment-layout/assignment.footer/assignment.footer.compnent';
import {  MenuService} from './layouts/assignment-layout/app.menu.service';
import {  AppMenuComponent} from './layouts/assignment-layout/app.menu.component';
import {  AppMenuitemComponent} from './layouts/assignment-layout/app.menuitem.component';
import {MenubarModule} from 'primeng/menubar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BreadCrumbItemsService } from './_shared/bread-crumb-items.service';
import { MenuLayoutComponent } from './layouts/menu-layout/menu-layout.component';
import { MenuFooterComponent } from './layouts/menu-layout/menu.footer/menu.footer';
import { MenuHeaderComponent } from './layouts/menu-layout/menu.header/menu.header';
@NgModule({
  declarations: [
    AppComponent,
    AuthFooterComponent,AuthHeaderComponent,AuhtLayoutComponent,MenuLayoutComponent,MenuFooterComponent,MenuHeaderComponent,AssignmentLayoutComponent,
    AssignmentHeaderComponent,AssignmentFooterComponent,AppMenuComponent,AppMenuitemComponent
  ],
  imports: [
    BrowserModule,  FormsModule,HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,/* MatSliderModule,MatInputModule, */
    AutoCompleteModule,MessagesModule,MessageModule,NgxUiLoaderModule,MenubarModule,CardModule,BreadcrumbModule
  ],
  providers: [MessageService,MenuService,NgxUiLoaderService,BreadCrumbItemsService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

