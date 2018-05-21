import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TreeComponent, TreeNodeComponent],
  exports: [CommonModule, TreeComponent]
})
export class SharedModule {
}
