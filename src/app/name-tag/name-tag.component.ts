import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css']
})
export class NameTagComponent implements OnInit {

  @Input() name:string;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(){
    console.log('select ' + this.name);
    this.selected.emit(this.name);
  }

}
