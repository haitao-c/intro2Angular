import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  stoke = '';
  isCollapsed = false;



  constructor(private router: Router) {
    // console.log('This statement was generated by the constructor', this.aSimpleDecrator(5, 2));
  }




}