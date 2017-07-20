import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firsts = new Set();
  lasts = new Set();
  constructor(public cust: CustomerService) {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.firsts.clear();
    this.lasts.clear();
    this.cust.data.forEach(item => {
      this.firsts.add(item.firstName);
      this.lasts.add(item.lastName);
    });
  }

  uplasts(sel) {
    this.lasts.clear();
    this.cust.data
      .filter(e => e.firstName === sel)
      .forEach(e => this.lasts.add(e.lastName));
    console.log(this.lasts);
  }

  upfirsts(sel) {
    this.firsts.clear();
    this.cust.data
      .filter(e => e.lastName === sel)
      .forEach(e => this.firsts.add(e.firstName));
    console.log(this.firsts);
  }
}
