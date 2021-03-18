import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenealogyTreeComponent } from './genealogy-tree/genealogy-tree.component';
import { ItemChildComponent } from './item-child/item-child.component';
import { ItemChildrenComponent } from './item-children/item-children.component';
import { KeysPipe } from './keys/keys.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    GenealogyTreeComponent,
    ItemChildComponent,
    ItemChildrenComponent,
    KeysPipe,
    ClickStopPropagationDirective,
  ],
  exports: [
    GenealogyTreeComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ComponentsModule { }
