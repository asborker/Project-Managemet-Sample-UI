import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

const routes: Routes = [
  { path: '', redirectTo: '/trans/projects', pathMatch: 'full' },
  {
    path: 'trans', component: ContainerComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'projects', component: DashboardComponent },
      { path: 'new-project', component: NewProjectComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
