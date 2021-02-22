import { IAddress } from './../../shared/models/address';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../../account/account.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {

  @Input() checkoutForm: FormGroup;

  constructor(private accountService: AccountService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  saveUserAddress() {
    this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value).subscribe(
      (address: IAddress) => {
        this.toaster.success("Address Saved!")
        this.checkoutForm.get('addressForm').reset(address);
      },
      error => {
        this.toaster.error(error.message);
      }
    );
  }

}
