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
  isValidBST() {
    if (!this.root) return true;
    let queue = [{ node: this.root, min: -Infinity, max: Infinity }];
    while (queue.length > 0) {
      let { node, min, max } = queue.shift();
      if (node.value <= min || node.value >= max) {
        return false;
      }
      if (node.left) {
        queue.push({ node: node.left, min: min, max: node.value });
      }
      if (node.right) {
        queue.push({ node: node.right, min: node.value, max: max });
      }
    }
    return true;
  }
  isValidBSTrecursive(node, min = -Infinity, max = Infinity) {
    if (!node) return true; // Base case: An empty subtree is a valid BST

    // Check if the current node's value is within the allowed range
    if (node.value <= min || node.value >= max) {
      return false; // Violates the BST property
    }

    // Recursively check the left and right subtrees with updated min and max values
    return (
      this.isValidBSTrecursive(node.left, min, node.value) && // Left subtree must be less than current node
      this.isValidBSTrecursive(node.right, node.value, max) // Right subtree must be greater than current node
    );
  }
}
//         9
//     4      20
//  1    6  15   170

let mytree = new BinarySearchTree();
mytree.insert(9);
mytree.insert(4);
mytree.insert(20);
mytree.insert(1);
mytree.insert(6);
mytree.insert(15);
mytree.insert(170);

console.log(mytree.isValidBSTrecursive(mytree.root));

function traverse(node) {
  let tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
