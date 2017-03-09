import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../base.component';
import { itemSchema } from '../UIConfig.model';
import { SkillManagerService } from '../../step-builder/step-input-area/skill-manager.service';

declare var Dropzone: any;
Dropzone.autoDiscover = false;
@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent extends BaseComponent implements OnInit {
  //Temporary Code Starts
  tempDocJSON: any;
  uiConfigJSON: any;
  //Temporary Code Ends
  @ViewChild('dropzone') dropzoneContainer;
  labelConfig: itemSchema = new itemSchema();
  constructor(private elementRef: ElementRef, private skillManager: SkillManagerService) {
    super();
    this.tempDocJSON = { "activeSheetIndex": 0, "sheetCount": 2, "sheets": [{ "name": "Call Analysis", "defaults": { "rowHeight": 19, "colWidth": 72, "colHeaderRowHeight": 20, "rowHeaderColWidth": 40 }, "columns": [{ "size": 125 }, { "size": 82 }, { "size": 127 }, { "size": 100 }, { "size": 82 }, { "size": 29 }, { "size": 86 }, { "size": 77 }, { "size": 51 }], "rows": [{ "size": 26 }, { "size": 22 }, null, { "size": 40 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 19 }, { "size": 19 }, { "size": 19 }, { "size": 19 }, { "size": 19 }, { "size": 20 }, { "size": 20 }, { "size": 20 }, { "size": 19 }, { "size": 19 }], "frozenRowCount": 0, "frozenColCount": 0, "rowCount": 23, "columnCount": 8, "data": { "name": "Call Analysis", "rowCount": 23, "colCount": 9, "dataTable": { "0": { "0": { "value": "TOA: Timeshare Owners' Association", "style": "__builtInStyle41" }, "1": { "style": "__builtInStyle41" }, "2": { "style": "__builtInStyle41" }, "3": { "style": "__builtInStyle41" }, "4": { "style": "__builtInStyle41" }, "rs": "e" }, "1": { "0": { "value": "Membership Drive Call Analysis", "style": "__builtInStyle42" }, "1": { "style": "__builtInStyle42" }, "2": { "style": "__builtInStyle42" }, "3": { "style": "__builtInStyle42" }, "4": { "style": "__builtInStyle42" }, "rs": "e" }, "3": { "0": { "value": "Date", "style": "__builtInStyle10" }, "1": { "value": "Calls Handled", "style": "__builtInStyle10" }, "2": { "value": "Category", "style": "__builtInStyle10" }, "3": { "value": "% Calls Successful", "style": "__builtInStyle10" }, "4": { "value": "Met Quota", "style": "__builtInStyle10" }, "rs": "e" }, "4": { "0": { "value": "/OADate(43277)/", "style": "__builtInStyle11" }, "1": { "value": 127, "style": "__builtInStyle12" }, "2": { "value": "Visit", "style": "__builtInStyle12" }, "3": { "value": 0.63, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D5>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "5": { "0": { "value": "/OADate(43277)/", "style": "__builtInStyle11" }, "1": { "value": 111, "style": "__builtInStyle12" }, "2": { "value": "Sales", "style": "__builtInStyle12" }, "3": { "value": 0.7, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D6>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "6": { "0": { "value": "/OADate(43277)/", "style": "__builtInStyle11" }, "1": { "value": 142, "style": "__builtInStyle12" }, "2": { "value": "Presentation", "style": "__builtInStyle12" }, "3": { "value": 0.63, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D7>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "7": { "0": { "value": "/OADate(43278)/", "style": "__builtInStyle11" }, "1": { "value": 131, "style": "__builtInStyle12" }, "2": { "value": "Visit", "style": "__builtInStyle12" }, "3": { "value": 0.25, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D8>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "8": { "0": { "value": "/OADate(43278)/", "style": "__builtInStyle11" }, "1": { "value": 96, "style": "__builtInStyle12" }, "2": { "value": "Sales", "style": "__builtInStyle12" }, "3": { "value": 0.7, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D9>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "9": { "0": { "value": "/OADate(43278)/", "style": "__builtInStyle11" }, "1": { "value": 147, "style": "__builtInStyle12" }, "2": { "value": "Presentation", "style": "__builtInStyle12" }, "3": { "value": 0.55, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D10>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "10": { "0": { "value": "/OADate(43279)/", "style": "__builtInStyle11" }, "1": { "value": 109, "style": "__builtInStyle12" }, "2": { "value": "Visit", "style": "__builtInStyle12" }, "3": { "value": 0.49, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D11>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "11": { "0": { "value": "/OADate(43279)/", "style": "__builtInStyle11" }, "1": { "value": 112, "style": "__builtInStyle12" }, "2": { "value": "Sales", "style": "__builtInStyle12" }, "3": { "value": 0.54, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D12>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "12": { "0": { "value": "/OADate(43279)/", "style": "__builtInStyle11" }, "1": { "value": 163, "style": "__builtInStyle12" }, "2": { "value": "Presentation", "style": "__builtInStyle12" }, "3": { "value": 0.64, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D13>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "13": { "0": { "value": "/OADate(43280)/", "style": "__builtInStyle11" }, "1": { "value": 114, "style": "__builtInStyle12" }, "2": { "value": "Visit", "style": "__builtInStyle12" }, "3": { "value": 0.29, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D14>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "6": { "style": "__builtInStyle14" }, "rs": "e" }, "14": { "0": { "value": "/OADate(43280)/", "style": "__builtInStyle11" }, "1": { "value": 116, "style": "__builtInStyle12" }, "2": { "value": "Sales", "style": "__builtInStyle12" }, "3": { "value": 0.28, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D15>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "6": { "value": "Call Levels", "style": "__builtInStyle43" }, "7": { "style": "__builtInStyle8" }, "rs": "e" }, "15": { "0": { "value": "/OADate(43280)/", "style": "__builtInStyle11" }, "1": { "value": 162, "style": "__builtInStyle12" }, "2": { "value": "Presentation", "style": "__builtInStyle12" }, "3": { "value": 0.47, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D16>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "6": { "style": "__builtInStyle43" }, "7": { "style": "__builtInStyle8" }, "8": { "style": "__builtInStyle8" }, "rs": "e" }, "16": { "0": { "value": "/OADate(43281)/", "style": "__builtInStyle11" }, "1": { "value": 127, "style": "__builtInStyle12" }, "2": { "value": "Visit", "style": "__builtInStyle12" }, "3": { "value": 0.6, "style": "__builtInStyle36" }, "4": { "value": "SUCCESS", "formula": "IF(D17>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "6": { "style": "__builtInStyle43" }, "7": { "value": "Minimum:", "style": "__builtInStyle8" }, "8": { "value": { "_error": "#NAME?", "_code": 29 }, "formula": "MIN(B5:B19)", "style": "__builtInStyle8" }, "rs": "e" }, "17": { "0": { "value": "/OADate(43281)/", "style": "__builtInStyle11" }, "1": { "value": 116, "style": "__builtInStyle12" }, "2": { "value": "Sales", "style": "__builtInStyle12" }, "3": { "value": 0.55, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D18>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "6": { "style": "__builtInStyle43" }, "7": { "value": "Maximum:", "style": "__builtInStyle8" }, "8": { "value": { "_error": "#NAME?", "_code": 29 }, "formula": "MAX(B5:B19)", "style": "__builtInStyle8" }, "rs": "e" }, "18": { "0": { "value": "/OADate(43281)/", "style": "__builtInStyle11" }, "1": { "value": 133, "style": "__builtInStyle12" }, "2": { "value": "Presentation", "style": "__builtInStyle12" }, "3": { "value": 0.48, "style": "__builtInStyle36" }, "4": { "value": "No", "formula": "IF(D19>59%,\"SUCCESS\",\"No\")", "style": "__builtInStyle10" }, "rs": "e" }, "19": { "1": { "style": "__builtInStyle8" }, "3": { "value": "Total:", "style": "__builtInStyle8" }, "4": { "value": 1906, "formula": "SUM(B5:B19)", "style": "__builtInStyle39" }, "6": { "style": "__builtInStyle13" }, "7": { "style": "__builtInStyle13" }, "8": { "style": "__builtInStyle8" }, "rs": "e" }, "20": { "0": { "value": "Updated:", "style": "__builtInStyle40" }, "1": { "style": "__builtInStyle40" }, "2": { "value": "/OADate(42452)/", "formula": "TODAY()", "style": "__builtInStyle37" }, "3": { "value": "Average:", "style": "__builtInStyle8" }, "4": { "value": 127.06666666666666, "formula": "AVERAGE(B5:B19)", "style": "__builtInStyle38" }, "6": { "style": "__builtInStyle8" }, "rs": "e" }, "21": { "1": { "style": "__builtInStyle9" }, "rs": "e" }, "22": { "0": { "style": "__builtInStyle9" }, "1": { "style": "__builtInStyle9" }, "rs": "e" } }, "_rowDataArray": [], "_columnDataArray": [{ "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }, { "style": "__builtInStyle7" }], "_defaultDataNode": { "style": { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": " 14.7px Arial", "locked": true, "wordWrap": false } } }, "spans": [{ "row": 20, "rowCount": 1, "col": 0, "colCount": 2 }, { "row": 0, "rowCount": 1, "col": 0, "colCount": 5 }, { "row": 1, "rowCount": 1, "col": 0, "colCount": 5 }, { "row": 14, "rowCount": 4, "col": 6, "colCount": 1 }], "selections": [{ "endRow": 18, "endCol": 4, "startRow": 4, "startCol": 4 }], "activeRow": 4, "activeCol": 4, "_zoomFactor": 1, "sheetTabColor": "#FFFFFF", "names": [], "_index": 0, "tabSelected": true, "isVisible": true, "viewType": "NORMAL", "isEnabled": true }, { "name": "Sales by ID", "isVisible": true, "sheetTabColor": "#FFFFFF", "tabSelected": false, "isEnabled": false }], "names": [], "namedStyles": [{ "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle7" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle8" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle9" }, { "foreColor": "Text 2 0", "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle10", "parentName": "Heading 3" }, { "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "formatter": "d-mmm", "locked": true, "wordWrap": true, "name": "__builtInStyle11", "parentName": "Heading 3" }, { "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle12", "parentName": "Heading 3" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle13" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle14" }, { "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 2, "font": "normal normal 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle15" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 17.3px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle16", "parentName": "Heading 2" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 17.3px Arial", "formatter": "m/d/yyyy h:mm", "locked": true, "wordWrap": false, "name": "__builtInStyle17", "parentName": "Heading 2" }, { "backColor": "Accent 1 0", "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 1, "font": "italic bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle18", "parentName": "Heading 3" }, { "backColor": "Accent 1 0", "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 1, "font": "italic bold 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": true, "name": "__builtInStyle19", "parentName": "Heading 3" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderTop": { "color": "#000000", "style": 2 }, "locked": true, "wordWrap": false, "name": "__builtInStyle20" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "#000000", "style": 2 }, "locked": true, "wordWrap": false, "name": "__builtInStyle21" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "#000000", "style": 2 }, "locked": true, "wordWrap": false, "name": "__builtInStyle22" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "formatter": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "#000000", "style": 2 }, "locked": true, "wordWrap": false, "name": "__builtInStyle23", "parentName": "Currency" }, { "foreColor": "Accent 2 0", "hAlign": 3, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle24" }, { "backColor": "Accent 1 79", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle25" }, { "backColor": "Accent 1 79", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle26" }, { "backColor": "Accent 1 79", "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle27" }, { "backColor": "Accent 1 79", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "formatter": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle28", "parentName": "Currency" }, { "foreColor": "Accent 2 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle29" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle30" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle31" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 2, "font": "normal normal 14.7px Arial", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle32" }, { "backColor": "Accent 1 59", "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "formatter": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)", "borderLeft": { "color": "Background 1 0", "style": 1 }, "borderTop": { "color": "Background 1 0", "style": 1 }, "locked": true, "wordWrap": false, "name": "__builtInStyle33", "parentName": "Currency" }, { "foreColor": "Accent 2 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle34" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "formatter": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)", "locked": true, "wordWrap": false, "name": "__builtInStyle35", "parentName": "Currency" }, { "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "formatter": "0%", "locked": true, "wordWrap": true, "name": "__builtInStyle36", "parentName": "Percent" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal normal 14.7px Arial", "formatter": "m/d/yyyy", "locked": true, "wordWrap": false, "name": "__builtInStyle37" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "formatter": "0", "locked": true, "wordWrap": false, "name": "__builtInStyle38" }, { "foreColor": "Text 1 0", "hAlign": 3, "vAlign": 2, "font": "normal bold 14.7px Arial", "formatter": "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"??_);_(@_)", "locked": true, "wordWrap": false, "name": "__builtInStyle39", "parentName": "Comma" }, { "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 2, "font": "normal normal 14.7px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle40" }, { "foreColor": "Text 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 20px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle41", "parentName": "Heading 1" }, { "foreColor": "Text 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 17.3px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle42", "parentName": "Heading 2" }, { "foreColor": "Text 1 0", "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle43" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 20px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle44", "parentName": "Heading 1" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 2, "font": "normal bold 17.3px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle45", "parentName": "Heading 2" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 2, "font": "italic normal 13.3px Arial", "locked": true, "wordWrap": false, "name": "__builtInStyle46", "parentName": "Heading 2" }, { "foreColor": "Accent 2 0", "hAlign": 1, "vAlign": 1, "font": "normal bold 14.7px Arial", "locked": true, "wordWrap": true, "name": "__builtInStyle47" }], "theme": "Slice" };

    this.uiConfigJSON = { "id": "1.2.1", "label": "Document Data", "desc": { "basic": "Upload a JSON file which is used to configure the Excel workbook in SIMS.", "detailed": "" }, "itemRenderer": "Dropzone", "itemType": "leaf", "rendererProperties": { "dataType": "JSON", "placeHolder": "Drop JSON file here to upload" }, "dependants": [{ "modelReference": "views.1.sheets", "rule": "getSheetNameAndSheetCountFromInitDocJSON" }], "mandatory": true, "val": "views[1].documentData" };

  }
  ngOnInit() {
    var self = this;
    this.labelConfig.rendererProperties.text = this.compConfig.label;
    this.labelConfig.rendererProperties.type = 'ElementHeading';
    let dropzone = new Dropzone(this.dropzoneContainer.nativeElement, {
      url: "/api/file",
      dictDefaultMessage: this.compConfig.rendererProperties.placeHolder,
      init: function () {
        this.on("addedfile", function (file) { //To be Changed from 'addedfile' to 'success' when file starts getting stored on server;
          self.updateDependencies();
        })
      }
    });
  }


  updateDependencies() {
    var dependants = this.uiConfigJSON.dependants;
    for (let i = 0; i < dependants.length; i++) {
      let dependantModelReference = dependants[i].modelReference;
      let dependantRule = dependants[i].rule;
      this.skillManager[dependantRule](this.tempDocJSON, dependantModelReference);
    }
  }

}
