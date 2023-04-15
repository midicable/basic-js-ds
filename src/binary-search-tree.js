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
        } else if (data > currNode.data) {
          if (currNode.right) {
            currNode = currNode.right;
          } else {
            currNode.right = new Node(data);
            break;
          }
        } else {
          break;
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
          let minChildNodeParent = currNode.right;
          let minChildNode = currNode.right.left;
          if (!minChildNode) {
            currNode.data = minChildNodeParent.data;
            currNode.right = minChildNodeParent.right;
            minChildNodeParent.data = undefined;
            minChildNodeParent = null;
          } else {
            while (minChildNode) {
              minChildNodeParent = minChildNode;
              minChildNode = minChildNode.left;
            }
            currNode.data = minChildNodeParent.data;
            minChildNodeParent.data = undefined;
            minChildNodeParent = null;
          }
        } else if (currNode.left) {
          if (currNode == prevNode.left) {
            prevNode.left = currNode.left;
            currNode.data = undefined;
            currNode = null
          } else {
            prevNode.right = currNode.left;
            currNode.data = undefined;
            currNode = null
          }
        } else if (currNode.right) {
          if (currNode == prevNode.left) {
            prevNode.left = currNode.right;
            currNode.data = undefined;
            currNode = null
          } else {
            prevNode.right = currNode.right;
            currNode.data = undefined;
            currNode = null
          }
        } else {
          currNode.data = undefined;
          currNode = null;
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
    if (!this._root) {
      return null;
    } else {
      let currNode = this._root;
      while (currNode.left) {
        currNode = currNode.left;
      }
      return currNode.data;
    }
  }

  max() {
    if (!this._root) {
      return null;
    } else {
      let currNode = this._root;
      while (currNode.right) {
        currNode = currNode.right;
      }
      return currNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};