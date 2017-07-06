let inOrder = currentNode => {
    if (currentNode.left) inOrder(currentNode.left)
    if (currentNode.right) inOrder(currentNode.right)
    console.log(currentNode.data)
}

let findOrAdd = (currentNode, newNode) => {
    if (newNode.data === currentNode.data) return true
    if (newNode.data <currentNode.data) {
        return currentNode.left
            ? findOrAdd(currentNode.left, newNode) 
            : currentNode.left = newNode
    }
    if (newNode.data > currentNode.data) {
        return currentNode.right 
            ? findOrAdd(currentNode.right, newNode) 
            : currentNode.right = newNode 
    }
}

let max = node => node.right ? max(node.right) : node
let min = node => node.left ? min(node.left) : node