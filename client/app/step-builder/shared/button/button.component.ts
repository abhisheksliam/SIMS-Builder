import { Component, OnInit } from '@angular/core';
import { node } from '../UIConfig.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  compConfig: node;
  type: string;
  constructor() {
    this.compConfig = new node();
  }

  ngOnInit() {
    this.type = this.compConfig.rendererProperties.type || 'default';
  }

}