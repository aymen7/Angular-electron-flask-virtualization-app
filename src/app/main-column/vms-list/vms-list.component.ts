import { Component, OnInit } from '@angular/core';
import { DefinedDomain } from 'src/app/DefinedDomain.model';
import { VirtualizationService } from 'src/app/virtualization.service';
import { Vm } from 'src/app/Vm.model';

@Component({
  selector: 'app-vms-list',
  templateUrl: './vms-list.component.html',
  styleUrls: ['./vms-list.component.scss']
})
export class VmsListComponent implements OnInit {
  definedDomainsList: Vm[];
  hostName: string;
  constructor(private _virtualService: VirtualizationService) {
    this.hostName = '';
    // this.fetchDefinedDomainList();
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
        // console.log(this.definedDomainsList);
        console.log(`length= ${this.definedDomainsList.length}`);
        this.definedDomainsList.forEach(e => console.log(`${e[0]}-${e[1]}-${e[2]}-${e[3]}`));
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
