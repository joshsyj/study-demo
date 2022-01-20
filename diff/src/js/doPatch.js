import { ATTR, REPLACE, REMOVE, TEXT } from './patchType'
import { setAttrs, render } from './virtualDom'
import Element from './element'
let finalPatches = {},
    rnIndex = 0;
function doPatch(rDom, patches) {
    finalPatches = patches;
    rNodeWalk(rDom)
}
function rNodeWalk(rNode) {
    const rnPatch = finalPatches[rnIndex++],
        childNodes = rNode.childNodes;
    console.log(childNodes);
    [...childNodes].map((c => {
        rNodeWalk(c)
    }))
    if (rnPatch) {
        // console.log(rNode)
        patchAction(rNode, rnPatch)
    }
}

function patchAction(rNode, rnPatch) {
    rnPatch.map(p => {
        switch (p.type) {
            case ATTR:
                for (let key in p.attrs) {
                    const value = p.attrs[key]
                    if (value) {
                        setAttrs(rNode, key, value)
                    } else {
                        rNode.removeAttribute(key)
                    }
                }
                break;
            case TEXT:
                rNode.textContent = p.text;
                break;
            case REPLACE:
                const newNode = (p.newNode instanceof Element)
                    ? render(p.newNode) :
                    document.createElement(p.newNode)

                rNode.parentNode.replaceChild(newNode, rNode)
                break;
            case REMOVE:
                rNode.parentNode.removeChild(rNode)
                break;
            default:
                break;

        }
    })
}
export default doPatch