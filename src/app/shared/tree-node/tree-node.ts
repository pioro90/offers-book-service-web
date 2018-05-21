export class TreeNode {
  constructor(public id: string,
              public name: string,
              public parent: TreeNode = null,
              public children: TreeNode[] = [],
              public expanded: boolean = false) {
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  isLeaf(): boolean {
    return this.children.length === 0;
  }

  expandAllUp(): void {
    if (this.parent) {
      this.parent.expanded = true;
      this.parent.expandAllUp();
    }
  }

  expandAllDown(): void {
    this.expanded = true;
    this.children.forEach((node: TreeNode) => node.expandAllDown());
  }

}
