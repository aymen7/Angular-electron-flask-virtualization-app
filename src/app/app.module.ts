// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainColumnComponent } from './main-column/main-column.component';
import { FooterComponent } from './footer/footer.component';
import { VmsListComponent } from './main-column/vms-list/vms-list.component';
import { CreateVmComponent } from './main-column/create-vm/create-vm.component';
import { DestroyVmComponent } from './main-column/destroy-vm/destroy-vm.component';
import { ShowIpVmComponent } from './main-column/show-ip-vm/show-ip-vm.component';

// services
import { VirtualizationService } from './virtualization.service';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VirtualizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
