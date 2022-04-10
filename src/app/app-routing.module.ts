import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { AdminAuthGuard } from './auth/adminAuth.guard';
import { AuthGuardService } from './auth/auth.guard';
import { LoginActivate } from './auth/autologin.guard';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders-component/orders-component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'users/signup', component: SignupComponent },
  { path: 'users/login', component: SigninComponent, canActivate: [LoginActivate] },
  { path: 'users/dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService]},
  { path: 'users/cart', component: CartComponent, canActivate: [AuthGuardService]},
  { path: 'users/orders', component: OrdersComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },


  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard] },
  { path: 'admin/orders', component: ViewordersComponent, canActivate: [AdminAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
