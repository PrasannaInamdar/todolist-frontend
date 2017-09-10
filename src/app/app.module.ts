import { TasksService } from './tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { InputNsearchComponent } from './input-nsearch/input-nsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponentComponent,
    TitleComponentComponent,
    PostcomponentComponent,
    InputNsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
