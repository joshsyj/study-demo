import createElement from './createElement'
import patchVNode from './patchVNode'
import vnode from './vnode'

export default function patch(oldNode, newNode) {
    //不是虚拟dom转成虚拟dom
    if (!oldNode.sel) {
        oldNode = vnode(oldNode.nodeName.toLowerCase(), {}, [], undefined, oldNode)
    }
    if (oldNode.sel == newNode.sel && oldNode.key == newNode.key) {
        console.log('同一个节点')
        patchVNode(oldNode, newNode)
    }
    else {
        console.log('不同节点')
        let newNodeElm = createElement(newNode)
        if (newNodeElm && oldNode.elm) {
            oldNode.elm.parentNode.insertBefore(newNodeElm, oldNode.elm)
        }
        oldNode.elm.parentNode.removeChild(oldNode.elm)
    }
}