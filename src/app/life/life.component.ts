// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit, Input } from '@angular/core';

let logIndex = 1;

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
// tslint:disable-next-line: max-line-length
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  name: string;
  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  constructor() {
    this.logIt('name属性在contructor中的值为:' + name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes包含输入属性变化前的值和变化后的值
    const name = changes.name.currentValue;
    this.logIt('name属性在ngOnChanges中的值为:' + name);
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }



}
