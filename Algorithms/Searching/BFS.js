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
  breadthfirstsearch() {
    let currentnode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentnode);

    while (queue.length > 0) {
      currentnode = queue.shift();
      list.push(currentnode.value);
      if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
    }
    return list;
  }
  breadthfirstsearchrecursive(queue, list) {
    if (queue.length === 0) {
      return list;
    }
    let currentnode = queue.shift();
    list.push(currentnode.value);
    if (currentnode.left && currentnode.value > currentnode.left.value) {
      queue.push(currentnode.left);
    }
    if (currentnode.right && currentnode.value < currentnode.right.value) {
      queue.push(currentnode.right);
    }
    return this.breadthfirstsearchrecursive(queue, list);
  }
  levelOrder() {
    return Levetraversal(this.root);
  }
}
function Levetraversal(root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let count = 0;
    const currentLevelvalues = [];
    while (count < length) {
      const current = queue.shift();
      currentLevelvalues.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      count++;
    }
    result.push(currentLevelvalues);
  }
  return result;
}
//         9
//     4      20
//  1    6  15   170

let mytree = new BinarySearchTree();
mytree.insert(9);
mytree.insert(4);
mytree.insert(20);

mytree.insert(15);
mytree.insert(170);

console.log(mytree.breadthfirstsearchrecursive([mytree.root], []));
console.log(mytree.levelOrder());

function traverse(node) {
  let tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
