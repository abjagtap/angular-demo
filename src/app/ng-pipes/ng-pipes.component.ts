import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-pipes',
  templateUrl: './ng-pipes.component.html',
  styleUrls: ['./ng-pipes.component.css']
})
export class NgPipesComponent implements OnInit {

  title = 'my-first-app';
  todaydate = new Date();
  jsonval = { name: 'Alex', age: '25', address: { a1: 'Paris', a2: 'France' } };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  constructor() { }

  ngOnInit() {
  }

}
