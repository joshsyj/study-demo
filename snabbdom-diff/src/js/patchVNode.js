import createElement from "./createElement";

export default function patchVNode(oldNode, newNode) {
    if (oldNode === newNode) return;
    if (newNode.text && (!newNode.children || !newNode.children.length)) {
        if (oldNode.text != newNode.text) {
            oldNode.elm.innerText = newNode.text;
        }
    }
    else {
        if (oldNode.children && oldNode.children.length) {
            let un = 0;

            for (let i = 0; i < newNode.children.length; i++) {
                let nNode = newNode.children[i];
                let isExist = false;

                for (let j = 0; j < oldNode.children.length; j++) {
                    let oNode = oldNode.children[j];
                    if (nNode.key === oNode.key && nNode.sel === oNode.sel) {
                        isExist = true;
                    }
                }

                if (!isExist) {
                    let ndom = createElement(nNode);
                    nNode.elm = ndom;
                    if (un < oldNode.children.length) {
                        oldNode.elm.insertBefore(ndom, oldNode.children[un].elm)
                    }
                    else {
                        oldNode.elm.appendChild(ndom)
                    }
                }
                else {
                    un++;

                }
            }

        }
        else {
            oldNode.elm.innerHTML = '';
            for (let i = 0; i < newNode.children.length; i++) {
                let dom = createElement(newNode.children[i]);
                oldNode.elm.appendChild(dom)
            }
        }
    }
}