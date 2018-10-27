import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainColumnComponent } from './main-column/main-column.component';
import { FooterComponent } from './footer/footer.component';
import { VmsListComponent } from './main-column/vms-list/vms-list.component';
import { CreateVmComponent } from './main-column/create-vm/create-vm.component';
import { DestroyVmComponent } from './main-column/destroy-vm/destroy-vm.component';
import { ShowIpVmComponent } from './main-column/show-ip-vm/show-ip-vm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainColumnComponent,
    FooterComponent,
    VmsListComponent,
    CreateVmComponent,
    DestroyVmComponent,
    ShowIpVmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
