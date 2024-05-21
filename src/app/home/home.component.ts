import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  starRating = 0;
  foods: Food[] = [];

  constructor(private service: FoodService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.service
          .getAll()
          .filter((Food) =>
            Food.name.toLocaleLowerCase().includes(params['searchItem'])
          );
         else if( params['tag'])
          this.foods=this.service. getFoodTag(params['tag'])
      else this.foods = this.service.getAll();
    });
  }
}
