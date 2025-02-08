// Inorder [1,4,6,9,15,20,170] gives sorted
// Preorder [9,4,1,6,20,15,170]
// Posrorder [1,6,4,15,170,20,9]
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
  Depthfirsttraversalinorder() {
    return traverseInorder(this.root, []);
  }
  Depthfirsttraversalpreorder() {
    return traversePreorder(this.root, []);
  }
  Depthfirsttraversalpostorder() {
    return traversePostorder(this.root, []);
  }
  traverseInorderIterative() {
    const stack = [];
    const result = [];
    let current = this.root;

    while (current !== null || stack.length > 0) {
      // Reach the leftmost node of the current node
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      // Current must be null at this point, so pop the last node from the stack
      current = stack.pop();
      result.push(current.value);

      // Now, visit the right subtree
      current = current.right;
    }

    return result;
  }
  traversePreorderIterative() {
    if (this.root === null) return [];
    let stack = [this.root];
    let result = [];
    while (stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);
      if (current.right !== null) {
        stack.push(current.right);
      }
      if (current.left !== null) {
        stack.push(current.left);
      }
    }
    return result;
  }
  traversePostorderIterative() {
    if (this.root === null) return [];

    let stack1 = [this.root];
    let stack2 = [];
    let result = [];

    // Process all nodes
    while (stack1.length > 0) {
      let current = stack1.pop();
      stack2.push(current); // Push the current node to stack2

      // Push left and right children to stack1
      if (current.left !== null) {
        stack1.push(current.left);
      }
      if (current.right !== null) {
        stack1.push(current.right);
      }
    }

    // Stack2 contains nodes in reverse postorder (root -> right -> left)
    // So we pop them to get left -> right -> root
    while (stack2.length > 0) {
      result.push(stack2.pop().value);
    }

    return result;
  }
  maxDepth() {
    return findDepth(this.root, 0);
  }
}

function findDepth(node, currentdepth) {
  if (!node) {
    return currentdepth;
  }
  currentdepth++;
  return Math.max(
    findDepth(node.left, currentdepth),
    findDepth(node.right, currentdepth)
  );
}
function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}
function traversePostorder(node, list) {
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
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
console.log(mytree.Depthfirsttraversalpreorder());

function traverse(node) {
  let tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
