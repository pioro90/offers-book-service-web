import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../tree-node/tree-node';
import { TreeService } from './tree.service';
import { TreeOptions } from './tree-options';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  providers: [TreeService]
})
export class TreeComponent implements OnInit {
  @Input()
  root: TreeNode;
  @Input()
  options: TreeOptions;

  constructor(private treeService: TreeService) {
  }

  ngOnInit(): void {
    /*if (this.options && this.options.expandedNodeId) {
      const node = this.getNode(this.options.expandedNodeId);
      node.expandAllUp();
    }*/

    this.root.expandAllDown();
  }

  getNode(id: string, node: TreeNode = this.root): TreeNode {
    const foundNode = node.children.find((child: TreeNode) => child.id === id);

    if (foundNode) {
      return foundNode;
    } else {
      for (const child of node.children) {
        const foundChildNode = this.getNode(id, child);
        if (foundChildNode) {
          return foundChildNode;
        }
      }
    }
  }

}
