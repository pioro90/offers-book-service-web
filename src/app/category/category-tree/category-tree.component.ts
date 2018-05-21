import { Component } from '@angular/core';
import { TreeNode } from '../../shared/tree-node/tree-node';

@Component({
  templateUrl: './category-tree.component.html'
})
export class CategoryTreeComponent {
  root: TreeNode;

  constructor() {
    this.root = new TreeNode('1', 'Categories');

    for (let i = 0; i < 5; i++) {
      const firstLevelNode = new TreeNode(`1${i}`, `Subcategory ${i}`, this.root);

      for (let j = 0; j < 3; j++) {
        const secondLevelNode = new TreeNode(`1${i}${j}`, `Level ${j}`, firstLevelNode);
        firstLevelNode.children.push(secondLevelNode);
      }

      this.root.children.push(firstLevelNode);
    }
  }

  options = {
    expandedNodeId: '141'
  };

}
