import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [
  { path: 'create-client', component: CreateClientComponent },
  { path: 'create-meeting', component: CreateMeetingComponent },
  { path: '', redirectTo: '/create-client', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }