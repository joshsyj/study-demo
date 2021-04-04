import vnode from './vnode.js'
export default function (sel, data, c) {
    if (arguments.length != 3) {
        throw new Error('简单h函数必须3个参数')
    }
    // h('div',{},文本)
    // h('div',{},[])
    // h('div',{},h())
    if (typeof c === 'string' || typeof c === 'number') {
        return vnode(sel, data, undefined, c, undefined)
    }
    else if (Array.isArray(c)) {
        let children = []
        c.forEach(v => {
            if (!(typeof v == 'object' && v.hasOwnProperty('sel'))) {
                throw new Error('数组参数不为h函数')
            }
            children.push(v)
        })
        return vnode(sel, data, children, undefined, undefined)
    }
    else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    }
    else {
        throw new Error('参数类型不对')
    }
}