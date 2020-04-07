import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnChanges {
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;
  public count: number = 1;

  @Input('data') data: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.count = this.data || 1;
  }

  onDownCounter() {
    this.count = this.count > 1 ? this.count - 1 : 1;
  }

  onUpCounter() {
    this.count = this.count + 1;
  }
}
