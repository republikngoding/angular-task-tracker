import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TaskComponent } from './component/task/task.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ButtonComponent,
        TaskComponent,
        TaskItemComponent,
        AddTaskComponent,
        AboutComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
