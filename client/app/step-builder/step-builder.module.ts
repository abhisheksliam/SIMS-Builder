import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import { StepBuilderComponent } from './step-builder/step-builder.component';
import { StepInputAreaComponent } from './step-input-area/step-input-area.component';
import { BalooReferenceComponent } from './baloo-reference/baloo-reference.component';
import { ViewNavigatorComponent } from './view-navigator/view-navigator.component';
import { ViewInputAreaComponent } from './view-input-area/view-input-area.component';
import { MethodViewerComponent } from './method-viewer/method-viewer.component';
import { ScenarioFilesViewerComponent } from './scenario-files-viewer/scenario-files-viewer.component';
import { ScenarioDocsComponent } from './scenario-docs/scenario-docs.component';
import { TaskFileStoreComponent } from './task-file-store/task-file-store.component';
import { InputFactoryService } from './shared/input-factory.service';

import { TabsModule } from 'ng2-bootstrap';

import { TextBoxComponent } from './shared/text-box-component/text-box.component';
import { GroupComponent } from './shared/group/group.component';
import { LabelComponent } from './shared/label/label.component';
import { TagComponent } from './shared/tag/tag.component';
import { SelectComponent } from './shared/select/select.component';
import { TabComponent } from './shared/tab/tab.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: StepBuilderComponent
      }
    ]),
    TabsModule.forRoot()
  ],
  declarations: [StepBuilderComponent, StepInputAreaComponent, BalooReferenceComponent, ViewNavigatorComponent, ViewInputAreaComponent, MethodViewerComponent, ScenarioFilesViewerComponent, ScenarioDocsComponent, TaskFileStoreComponent, TextBoxComponent, GroupComponent, LabelComponent, TagComponent, SelectComponent, TabComponent],
  providers: [InputFactoryService],
  entryComponents: [ TextBoxComponent, GroupComponent, SelectComponent, TabComponent ]
})
export class StepBuilderModule { }
