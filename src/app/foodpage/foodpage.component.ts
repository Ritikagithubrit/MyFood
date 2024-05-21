import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent {
  food!: Food;
  constructor(route: ActivatedRoute, service: FoodService,private cartService:CartService,private router:Router) {
    route.params.subscribe((params) => {
      if (params['id']) return (this.food = service.getFoodById(params['id']));
      return true; 
    });
  }

  ngOnInit(): void {
  
  }
  AddToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }


}


