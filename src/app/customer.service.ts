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
  firsts = new Set();
  lasts = new Set();

  constructor() {
    this.generate();
    this.reset();
  }

  generate() {
    const num = chance.integer({ min: 10000, max: 15000 });
    console.log(num);
    this.data = Array.from({ length: num }).map(this.genRec);
  }

  reset() {
    this.firsts.clear();
    this.lasts.clear();
    this.data.forEach(item => {
      this.firsts.add(item.firstName);
      this.lasts.add(item.lastName);
    });
  }

  uplasts(sel) {
    this.lasts.clear();
    this.data
      .filter(e => e.firstName === sel)
      .forEach(e => this.lasts.add(e.lastName));
    console.log(this.lasts);
  }

  upfirsts(sel) {
    this.firsts.clear();
    this.data
      .filter(e => e.lastName === sel)
      .forEach(e => this.firsts.add(e.firstName));
    console.log(this.firsts);
  }

  genRec() {
    return {
      firstName: chance.first(),
      lastName: chance.last()
    };
  }
}
