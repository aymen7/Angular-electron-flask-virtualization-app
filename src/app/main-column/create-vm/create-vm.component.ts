import { Component, OnInit } from '@angular/core';
import { VirtualizationService } from 'src/app/virtualization.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.scss']
})
export class CreateVmComponent implements OnInit {
  hostName: string;
  myForm: FormGroup;
  constructor(private _virtualService: VirtualizationService, private _fb: FormBuilder) {
    this.myForm = _fb.group({
      'vmName': ['', Validators.compose([Validators.required])]
    });
   }// constructor
  fetchHostName() {
    this._virtualService.getHostName().subscribe(
      data => {
        this.hostName = data.hostName;
      }
    );
  }
  formSubmit(form: any): any {
    console.log(`vm name: ${form.vmName}`);
    this._virtualService.createVm(form.vmName).subscribe(
      data  => {
        console.log('success');
      }
    );
  }
  ngOnInit() {
    this.fetchHostName();
  }

}
