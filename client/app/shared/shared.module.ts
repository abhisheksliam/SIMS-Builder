import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports from External Libraries
import { TabsModule, PopoverModule } from 'ng2-bootstrap';

import { InputFactoryService } from './input-factory.service';
import { ComponentRepositoryService, CompDeclarations, EntryComps } from './component-repository.service';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    FormsModule
  ],
  declarations: [ ...CompDeclarations() ],
  entryComponents: [ ...EntryComps() ],
  providers: [ InputFactoryService, ComponentRepositoryService ]
})
export class SharedModule { }
