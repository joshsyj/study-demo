export default function createElement(vnode) {
    let domNode = document.createElement(vnode.sel)

    if (vnode.text != '' && (!vnode.children || !vnode.children.length)) {
        domNode.innerText = vnode.text
    }
    else if (Array.isArray(vnode.children) && vnode.children.length) {
        for (let i = 0; i < vnode.children.length; i++) {
            let cdom = createElement(vnode.children[i])
            domNode.appendChild(cdom)
        }
    }
    vnode.elm = domNode
    return vnode.elm
}






