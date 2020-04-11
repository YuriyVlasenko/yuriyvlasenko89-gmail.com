import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchString: string = '';
  @Output('search') search = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public onSearch() {
    if (this.searchString.length > 0) {
      this.search.emit(this.searchString);
      this.searchString = '';
    }
  }
}
