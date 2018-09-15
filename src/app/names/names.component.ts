import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  
  @Input() names:string;
  @Output() selected = new EventEmitter<string>();

  selectedName:string;

  constructor() { }

  ngOnInit() {
  }

  showSelected(e){
    console.log(e);
    this.selectedName = e;
    this.selected.emit(e);
  }

}
