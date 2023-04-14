const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = undefined;

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data);
    } else {
      let currNode = this._root;
      while (currNode) {
        if (data < currNode.data) {
          if (currNode.left) {
            currNode = currNode.left;
          } else {
            currNode.left = new Node(data);
            break;
          }
        } else {
          if (currNode.right) {
            currNode = currNode.right;
          } else {
            currNode.right = new Node(data);
            break;
          }
        }
      }
    }
  }

  has(data) {
    let currNode = this._root;
    while (currNode) {
      if (currNode.data == data) {
        return true;
      } else {
        if (data < currNode.data) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }
    }
    return false;
  }

  find(data) {
    let currNode = this._root;
    while (currNode) {
      if (currNode.data == data) {
        return currNode;
      } else {
        if (data < currNode.data) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }
    }
    return null;
  }

  remove(data) {
    let prevNode = null;
    let currNode = this._root;
    while (currNode) {
      if (currNode.data == data) {
        if (currNode.left && currNode.right) {
          
        } else if (currNode.left) {

        } else if (currNode.right) {

        } else {

        }
      } else {
        if (data < currNode.data) {
          prevNode = currNode;
          currNode = currNode.left;
        } else {
          prevNode = currNode;
          currNode = currNode.right;
        }
      }
    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};