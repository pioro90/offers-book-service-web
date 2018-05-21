import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node';
import { TreeService } from '../tree/tree.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html'
})
export class TreeNodeComponent {
  @Input()
  node: TreeNode;

  constructor(private treeService: TreeService) {
  }

  isExpanded(): boolean {
    return this.node.expanded;
  }

  onToggleExpand() {
    this.node.toggleExpand();
  }

  isLeaf(): boolean {
    return this.node.isLeaf();
  }

  onSelect() {
    this.treeService.nodeSelectedSubject.next(this.node);
  }

}

