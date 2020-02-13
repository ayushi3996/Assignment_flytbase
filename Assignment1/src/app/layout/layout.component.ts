import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  a;
  b;
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  x: number[] = [];
  y: number[] = [];
  move: string = '';
  direction: string[] = ['Up', 'Down'];
  newArrx: number[] = [];
  newArry: number[] = [];
  cordinates: Array<number>[] = []
  constructor() {

  }

  ngOnInit() {

  }

  select(m , n) {
    console.log(m, n);
    this.x.push(m);
    console.log(this.x);
    this.y.push(n);
    console.log(this.y);

    if (this.x.length === 2) {
      while (this.y[0] < this.y[1]) {
        console.log(this.move);
        this.newArrx.push(this.x[0]);
        this.newArry.push(this.y[0]);
        if (this.move === 'Up' ) {
          while (this.x[0] > 1) {
            this.x[0]--; //
            this.newArrx.push(this.x[0]);
            this.newArry.push(this.y[0]);
            this.a = '^';
            console.log(this.x[0], this.y[0]);
          }

        }
        if (this.move === 'Down') {
          console.log(1, this.rows[this.rows.length - 1]);
          while (this.x[0] < this.rows[this.rows.length - 1]) {
            this.x[0]++; //
            this.newArrx.push(this.x[0]);
            this.newArry.push(this.y[0]);
            this.a = 'v';
            console.log(this.x[0], this.y[0]);
          }
        }
        this.y[0]++; //// this.a = ">"
        this.newArrx.push(this.x[0]);
        this.newArry.push(this.y[0]);
        console.log(this.x[0], this.y[0]);
      }
      while (this.y[0] > this.y[1]) {
        if (this.move === 'Up') {
          while (this.x[0] > 1) {
            this.x[0]--; //
            this.newArrx.push(this.x[0]);
            this.newArry.push(this.y[0]);
            this.a="^"
            console.log(this.x[0], this.y[0]);
          }
        }
        if (this.move === 'Down') {
          while (this.x[0] < this.rows[this.rows.length - 1]) {
            this.x[0]++; //
            this.newArrx.push(this.x[0]);
            this.newArry.push(this.y[0]);
            this.a="v"
            console.log(this.x[0], this.y[0]);
          }
        }
        this.y[0]--; //
        this.newArrx.push(this.x[0]);
        this.newArry.push(this.y[0]);
        console.log(this.x[0], this.y[0]);
      }
      if (this.y[0] === this.y[1]) {
        while (this.x[0] < this.x[1]) {
          this.x[0] ++; //
          this.a="^";
          this.newArrx.push(this.x[0]);
          this.newArry.push(this.y[0]);
          console.log(this.x[0], this.y[0]);
        }
        while (this.x[0] > this.x[1]) {
          this.x[0] --; //
          this.a="v"
          this.newArrx.push(this.x[0]);
          this.newArry.push(this.y[0]);
          console.log(this.x[0], this.y[0]);
        }

        this.x = [];
        this.y = [];
        console.log(this.newArrx, this.newArry);
      }

    }
    this.cordinates = [];
    for (let i = 0; i < this.newArrx.length; i++){
      this.cordinates.push([this.newArrx[i], this.newArry[i]])
    }

    console.log("cordinates are", this.cordinates)
    console.log('1');
  }

  check(m, n) {
    var flag=0;
    for(let j=0; j<this.newArrx.length; j++){
      if(m==this.newArrx[j] && n== this.newArry[j]){
        flag = 1;
      }
    }
    if(flag == 1){
      return true;
    }
   else {
     return false;
   }
  }

  reset(){
    window.location.reload();
  }
}
