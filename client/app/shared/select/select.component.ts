import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { itemSchema } from '../UIConfig.model';
import { LabelTypes } from '../enums';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseComponent {
  labelConfig: itemSchema = new itemSchema();
  itemList: Object = new Object();

  ngOnInit() {
    super.ngOnInit();
    this.UpdateView();
  }
  constructor() {
    super();
    this.itemList = {};
  }
  UpdateView() {
    this.labelConfig.rendererProperties.text = this.compConfig.label;
    this.labelConfig.rendererProperties.type = LabelTypes.ELEMENT_HEADING;
    this.updateDescription();
    if (this.compConfig.rendererProperties.dynamicMode === true) {
      this.itemList = this.builderModelSrvc.getStateRef(this.compConfig.rendererProperties.itemList);
    } else {
      this.itemList["value"] = this.compConfig.rendererProperties.itemList;
    }
    this.modelRef = this.builderModelSrvc.getStateRef(this.compConfig.val);
    this.setSelectedOption();
  }

  setSelectedOption() {
    if (this.modelRef["value"].label) {
      for (let itemIndex = 0; itemIndex < this.itemList["value"].length; itemIndex++) {
        if (this.modelRef["value"].label == this.itemList["value"][itemIndex].label) {
          this.modelRef["value"] = this.itemList["value"][itemIndex];
          break;
        }        
      }
    }
  }

  selectedItemChange() {
    this.emitEvents(this.modelRef["value"]);
  }

  getEventPayload() {
    return this.modelRef["value"];
  }
}
