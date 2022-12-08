import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RamComponent } from './components/ram/ram.component';


const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'forgot-password',component:ForgotPasswordComponent},
   {path:'employees',component:EmployeesComponent},
   {path:'ram',component:RamComponent},
   {path:'',redirectTo:'/login',pathMatch:'full'},
   {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
