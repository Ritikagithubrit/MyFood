import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodtags?:string[];
  tags: Tag[] =[];
constructor( private service :FoodService){}
ngOnInit() :void {
  if(!this.foodtags)
this.tags = this.service.getAllTag();
}
}
