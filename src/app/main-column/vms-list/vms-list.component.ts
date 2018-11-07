import { Component, OnInit } from '@angular/core';
import { DefinedDomain } from 'src/app/DefinedDomain.model';
import { VirtualizationService } from 'src/app/virtualization.service';

@Component({
  selector: 'app-vms-list',
  templateUrl: './vms-list.component.html',
  styleUrls: ['./vms-list.component.scss']
})
export class VmsListComponent implements OnInit {
  definedDomainsList: any;
  hostName: string;
  constructor(private _virtualService: VirtualizationService) {
    this.definedDomainsList = {};
    this.hostName = '';
   }
  fetchDefinedDomainList() {
    this._virtualService.getAllDefinedDomains().subscribe(
      data => {
        this.definedDomainsList = data;
      },
      err => {
        console.log(`failed: ${err}`);
      },
      () => {
        console.log(this.definedDomainsList);
        console.log(`length= ${this.definedDomainsList.vm1.length}`);
      }
    );
  }
  fetchHostName() {
    this._virtualService.getHostName().subscribe(
      data => {
        this.hostName = data.hostName;
      }
    );
  }
  ngOnInit() {
    this.fetchDefinedDomainList();
    this.fetchHostName();
  }

}
