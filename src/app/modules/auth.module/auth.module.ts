
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login.component/login.compnent';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {GalleriaModule} from 'primeng/galleria';
import {ToastModule} from 'primeng/toast';
import { exLoginComponent } from './external.login.component/external.login.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(AuthRoutes),MessagesModule,
    MessageModule,GalleriaModule,ToastModule
  ],
  declarations: [LoginComponent,exLoginComponent],
  providers:[MessageService]
})
export class AuthModule {}
