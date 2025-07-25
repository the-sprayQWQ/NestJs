import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entities';

@Injectable()
export class CoffeesService {
  private coffee: Coffee[] = [
    {
      id: 1,
      name: 'Coffee1',
      brand: 'Brand1',
      flavors: ['flavor1', 'flavor2'],
    },
    {
      id: 2,
      name: 'Coffee2',
      brand: 'Brand2',
      flavors: ['flavor3', 'flavor4'],
    },
    {
      id: 3,
      name: 'Coffee3',
      brand: 'Brand3',
      flavors: ['flavor5', 'flavor6'],
    },
  ];

  findAll() {
    return this.coffee;
  }

  findOne(id: string) {
    const coffee = this.coffee.find((item) => item.id === +id);
    if(!coffee){
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return coffee
  }

  create(createCoffeeDto: any) {
    this.coffee.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      Object.assign(existingCoffee, updateCoffeeDto);
    }
  }

  remove(id:string){
    const index = this.coffee.findIndex((item) => item.id === +id);
    if (index >= 0) {
      this.coffee.splice(index, 1);
    }
  }
}
