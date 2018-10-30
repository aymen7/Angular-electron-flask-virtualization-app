import { Component, OnInit } from '@angular/core';
import { VirtualizationService } from 'src/app/virtualization.service';

@Component({
  selector: 'app-destroy-vm',
  templateUrl: './destroy-vm.component.html',
  styleUrls: ['./destroy-vm.component.scss']
})
export class DestroyVmComponent implements OnInit {
  hostName: string;
  constructor(private _virtualService: VirtualizationService) { }
  fetchHostName() {
    this._virtualService.getHostName().subscribe(
      data => {
        this.hostName = data.hostName;
      }
    );
  }
  ngOnInit() {
    this.fetchHostName();
  }


}
