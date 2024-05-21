import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getFoodById(id:number):Food {
    return this.getAll().find(food => food.id == id)!

  }
  getFoodTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getAllTag() :Tag[]{
    return[
      {name:'All',count:11},
      {name:'FastFood',count:8},
      {name:'pizza',count:2},
      {name:'Lunch',count:7},
      {name:'Slowfood',count:3},
      {name:'burger',count:2},
      {name:'Fry',count:2},
      {name:'soup',count:1},
    ];
  }
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: ' Vegetables pizza',
        price: 50,
        cookTime: '10-20',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/pizza-img1.jpg',
        tags: ['FastFood', 'pizza', 'Lunch'],
        origins: ['italy', 'india', 'peris'],
      },
      {
        id: 2,
        name: ' Capsicum pizza',
        price: 80,
        cookTime: '10-20',
        favorite: true,
        stars: 4.3,
        imageUrl: '/assets/FoodImages/pizza-img2.jpg',
        tags: ['FastFood', 'pizza', 'Lunch'],
        origins: ['italy', 'china', 'london'],
      },
      {
        id: 3,
        name: 'Thali',
        price: 200,
        cookTime: '50-60',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/lunch-img4.jpg',
        tags: ['Lunch'],
        origins: ['india', 'dubai'],
      },
      {
        id: 4,
        name: 'Dal Rice',
        price: 150,
        cookTime: '50-60',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/lunch-img5.jpg',
        tags: ['Lunch'],
        origins: ['india'],
      },
      {
        id: 5,
        name: 'Veg burger',
        price: 150,
        cookTime: '15-20',
        favorite: true,
        stars: 3.5,
        imageUrl: '/assets/FoodImages/burger-img6.jpg',
        tags: ['FastFood', 'burger', 'Lunch'],
        origins: ['india', 'germany'],
      },

      {
        id: 6,
        name: 'Allo tiki burger',
        price: 70,
        cookTime: '15-20',
        favorite: false,
        stars: 3.4,
        imageUrl: '/assets/FoodImages/burger-img7.jpg',
        tags: ['FastFood', 'burger', 'Lunch'],
        origins: ['india'],
      },
      {
        id: 7,
        name: 'French fries',
        price: 50,
        cookTime: '10-15',
        favorite: true,
        stars: 4.4,
        imageUrl: '/assets/FoodImages/french fries-img8.jpg',
        tags: ['FastFood', 'Fry', 'Slowfood'],
        origins: ['india', 'france'],
      },

      {
        id: 8,
        name: 'crispy fries',
        price: 70,
        cookTime: '10-15',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/french fries-img9.jpg',
        tags: ['FastFood', 'Fry', 'Slowfood'],
        origins: ['india', 'france'],
      },
      {
        id: 9,
        name: 'Noodles',
        price: 80,
        cookTime: '10-15',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/noodles-img10.jpg',
        tags: ['FastFood', 'Lunch'],
        origins: ['indai', 'china'],
      },

      {
        id: 10,
        name: 'Soup',
        price: 80,
        cookTime: '10-15',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/FoodImages/slow food-img11.jpg',
        tags: ['Slowfood','soup'],
        origins: ['india', 'asia'],
      },
      {
        id: 11,
        name: 'Momos',
        price: 60,
        cookTime: '15-20',
        favorite: true,
        stars: 3.5,
        imageUrl: '/assets/FoodImages/momos-img12.jpg',
        tags: ['FastFood'],
        origins: ['nepal', 'china', 'india'],
      },
    ];
  }
}
