import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { UsersComponent } from './components/users/users.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

// Services
import { HttpService } from './services/http.service';
import { DashboardService } from './services/dashboard.service';

// Pipes
import { SearchTextPipe } from './pipes/search-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FormsComponent,
    UsersComponent,
    NewProjectComponent,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
