import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;

  @Output('change') change = new EventEmitter<number>();
  @Input('count') count: number;

  constructor() {}

  ngOnInit(): void {}

  onDownCounter() {
    this.count = this.count > 1 ? this.count - 1 : 1;
    this.change.emit(this.count);
  }

  onUpCounter() {
    this.count = this.count + 1;
    this.change.emit(this.count);
  }
}
