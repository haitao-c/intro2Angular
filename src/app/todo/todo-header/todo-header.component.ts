import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, flatMap, delay, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue = '';
  @Input() placeholder = 'What needs to be done?';
  @Input() delay = 300;

  @Output() textChanges = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    const event$ = fromEvent(elementRef.nativeElement, 'keyup')
      .pipe(
        map(() => this.inputValue),
        debounceTime(this.delay),
        distinctUntilChanged()
      );
    event$.subscribe(input => this.textChanges.emit(input));
  }

  ngOnInit() {
  }

  enterUp() {
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }

}
