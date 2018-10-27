import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsListComponent } from './main-column/vms-list/vms-list.component';
import { CreateVmComponent } from './main-column/create-vm/create-vm.component';
import { DestroyVmComponent } from './main-column/destroy-vm/destroy-vm.component';
import { ShowIpVmComponent } from './main-column/show-ip-vm/show-ip-vm.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: VmsListComponent},
  {path: 'create', component: CreateVmComponent},
  {path: 'destroy', component: DestroyVmComponent},
  {path: 'showIp', component: ShowIpVmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
