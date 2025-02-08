class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newnode = new Node(value);
    if (this.root === null) {
      this.root = newnode;
    } else {
      let currentnode = this.root;
      while (true) {
        if (value < currentnode.value) {
          if (!currentnode.left) {
            currentnode.left = newnode;
            return this;
          }
          currentnode = currentnode.left;
        } else {
          if (!currentnode.right) {
            currentnode.right = newnode;
            return this;
          }
          currentnode = currentnode.right;
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return null;
    } else {
      let currentnode = this.root;
      while (currentnode) {
        if (value < currentnode.value) {
          currentnode = currentnode.left;
        } else if (value > currentnode.value) {
          currentnode = currentnode.right;
        } else if (currentnode.value === value) {
          return currentnode;
        }
      }
      return null;
    }
  }
}

let mytree = new BinarySearchTree();
mytree.insert(9);
mytree.insert(4);
mytree.insert(20);
mytree.insert(1);
mytree.insert(6);
mytree.insert(15);
mytree.insert(170);

console.log(traverse(mytree.root));

function traverse(node) {
  let tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
