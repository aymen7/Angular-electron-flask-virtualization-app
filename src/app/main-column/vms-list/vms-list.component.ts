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
  constructor(private _virtualService: VirtualizationService) {
    this.definedDomainsList = {};
   }
  fetchDefinedDomainList() {
    this._virtualService.getAllDefinedDomains().subscribe(
      data => {
        this.definedDomainsList = data;
        console.log(this.definedDomainsList);
        console.log(`length= ${this.definedDomainsList.vm1.length}`);
      }
    );
  }
  ngOnInit() {
    this.fetchDefinedDomainList();
  }

}
