import { Injectable } from '@angular/core';
import { TreeNode } from '../tree-node/tree-node';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TreeService {
  nodeSelectedSubject: Subject<TreeNode> = new Subject<TreeNode>();


}
