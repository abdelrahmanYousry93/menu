
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuRoutes } from './menu.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';




import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';

import {FileUploadModule} from 'primeng/fileupload';
import {OrderListModule} from 'primeng/orderlist';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {PaginatorModule} from 'primeng/paginator';
import {FieldsetModule} from 'primeng/fieldset';

import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {EditorModule} from 'primeng/editor';
import { GalleriaModule } from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import { NgxFileDropModule } from 'ngx-file-drop';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SplitButtonModule} from 'primeng/splitbutton';

import {MyMenuComponent} from './menu.component/MenuComponent'
import {MyMenuItemComponent} from './menu.item.component/menu.item.component'


@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(MenuRoutes),MessagesModule,MessageModule,TableModule,
    MultiSelectModule,PanelModule,DropdownModule,InputTextModule,InputNumberModule
    ,InputTextareaModule,CheckboxModule,InputMaskModule,CalendarModule,
    ButtonModule,CardModule,FileUploadModule,OrderListModule,DialogModule,
    ConfirmDialogModule,PaginatorModule,ToastModule,FieldsetModule,
    /* MatStepperModule, */ReactiveFormsModule,/* MatButtonModule, */TooltipModule,TabViewModule,EditorModule,
    OverlayPanelModule,GalleriaModule,CarouselModule,NgxFileDropModule,ProgressBarModule,RadioButtonModule,SplitButtonModule
  ],
  declarations: [MyMenuComponent,MyMenuItemComponent ],
  providers:[MessageService,ConfirmationService]
})
export class MenuModule {}
