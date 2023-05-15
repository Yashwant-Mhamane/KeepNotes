import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../container/container.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { RegisterComponent } from '../register/register.component';
import { OneNoteComponent } from '../one-note/one-note.component';
import { LogInComponent } from '../log-in/log-in.component';
import { MyActGaurdGuard } from '../my-act-gaurd.guard';
import { CheckBeforeLeavingGuard } from '../check-before-leaving.guard';
import { ErrorcompComponent } from '../errorcomp/errorcomp.component';

const routes:Routes=[
  {
  path:"",
  component:ContainerComponent
},
{
  path:"viewnote",
  component:ContainerComponent
},
{
  path:"addnotes",
  component:AddNoteComponent,
  canActivate:[MyActGaurdGuard],
  canDeactivate: [CheckBeforeLeavingGuard]
},
{
  path:"register",
  component:RegisterComponent,
  canDeactivate: [CheckBeforeLeavingGuard]
},
{
  path:"onenote/:id",
  component:OneNoteComponent,
  canActivate:[MyActGaurdGuard]
},
{
  path:"editnote/:id",
  component:AddNoteComponent,
  canActivate:[MyActGaurdGuard]
},
{
  path:"login",
  component:LogInComponent,
  // canDeactivate: [CheckBeforeLeavingGuard]
},
{
  path:"**",
  component:ErrorcompComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
