import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formArray';

  ipAddressForm: FormGroup;
  IPADDR = [1,2,3];

  get ipAddr() {
    return this.ipAddressForm.get('ipAddrFrm') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.ipAddressForm = this.fb.group({
      ipAddrFrm: this.fb.array([this.fb.control('')])
    })
  }

  newIpAddr() {
    this.ipAddr.push(this.fb.control(''));
  }

  submit() {
    console.log(this.ipAddressForm.getRawValue());
  }

  patchValue() {
    this.IPADDR.forEach(a => {
      this.ipAddr.push(new FormControl(a));
    })
  }

  deleteIp(index: number) {
    this.ipAddr.removeAt(index);
  }
}
