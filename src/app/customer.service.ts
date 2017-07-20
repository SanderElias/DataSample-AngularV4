import { Injectable } from '@angular/core';
import * as Chance from 'chance';

const chance = new Chance();

export interface Customer {
  firstName: string;
  lastName: string;
}

@Injectable()
export class CustomerService {
  data: Customer[] = [];
  constructor() {
    this.generate();
  }

  generate() {
    const num = chance.integer({ min: 10000, max: 15000 });
    console.log(num);
    this.data = Array.from({ length: num }).map(this.genRec);
  }

  genRec() {
    return {
      firstName: chance.first(),
      lastName: chance.last()
    };
  }
}
