import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from './../checkout.service';
import { BasketService } from './../../basket/basket.service';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';


@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {

  @Input() checkoutForm: FormGroup;

  constructor(private basketService: BasketService,
              private checkoutService: CheckoutService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe(
      (order: IOrder) => {
        this.toastr.success('Order Submitted!');
        this.basketService.deleteLocalBasket(basket.id);
        const navigationExtras: NavigationExtras = {state: order};
        this.router.navigate(['checkout/success'], navigationExtras);
      },
      error => {
        this.toastr.error(error.message);
      }
    );
  }

  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    }
  }

}
