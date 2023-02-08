import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:"", component:RegisterComponent},
  {path:"form", component:FormComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
