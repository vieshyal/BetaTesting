import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbMenuModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NbAccordionModule,
    NbButtonModule,
    NbUserModule,
    NbIconModule,
    NbActionsModule,
    NbSearchModule,
    NbMenuModule,
    NbActionsModule,
    NbCardModule,
  ],
  imports: [CommonModule],
})
export class NebularModule {}
