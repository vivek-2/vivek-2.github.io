import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-component',
  templateUrl: './increment-component.component.html',
  styleUrls: ['./increment-component.component.scss']
})
export class IncrementComponentComponent implements OnInit {
  countNumbers = [
    { number: 0 }, {
      number: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  increament(index) {
    this.countNumbers[index].number += 1
  }

  decreament(index) {
    if (this.countNumbers[index].number > 0) {
      this.countNumbers[index].number -= 1
    }
  }

  increamentAll() {
    for (let i = 0; i < this.countNumbers.length; i++) {
      this.countNumbers[i].number += 1

    }
  }
  decrementAll() {
    for (let i = 0; i < this.countNumbers.length; i++) {
      if (this.countNumbers[i].number > 0) {
        this.countNumbers[i].number -= 1
      }
    }
  }
}