import { Component, OnInit } from '@angular/core';
import { VirtualizationService } from 'src/app/virtualization.service';

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.scss']
})
export class CreateVmComponent implements OnInit {
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
