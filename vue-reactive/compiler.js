class Compiler {
    constructor(vm, data, el) {
        this.vm = vm;
        this.data = data;
        this.el = el;
        this.vnode = this.createdFragment();
        this.init();
        this.el.appendChild(this.vnode);
    }
    createdFragment() {
        let vnode = document.createDocumentFragment();
        while (this.el.firstChild) {
            vnode.appendChild(this.el.firstChild)
        }
        console.log(vnode)
        return vnode
    }

    init() {
        this.compileElement(this.vnode)
    }
    compileElement(el) {
        let reg = /\{\{(.*)\}\}/
        Array.prototype.slice.call(el.childNodes).forEach(function (v) {
            if (this.isElement(v.nodeType)) {
                this.compile(v)
            }
            else if (this.isText(v.nodeType) && reg.test(v.textContent)) {
                this.compileText(v, RegExp.$1.trim())
            }
            if (v.childNodes && v.childNodes.length) {
                this.compileElement(v)
            }
        }.bind(this))
    }
    compile(node) {
        var nodeAttrs = node.attributes;
        console.log(nodeAttrs)
        console.log(Array.prototype.slice.call(nodeAttrs))
        Array.prototype.slice.call(nodeAttrs).forEach(function (attr) {
            var attrName = attr.name;
            if (this.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                if(this.isEventDirective(dir)){

                }
                else{
                    compileUtil[dir] && compileUtil[dir](node, this.vm, exp);
                }
                node.removeAttribute(attrName);
            }
        }.bind(this))
    }
    compileText(node, exp) {
        // console.log(node, exp)
        compileUtil.text(node, this.vm, exp)
    }
    // *****************************
    isDirective(v) {
        return v.indexOf('v-') > -1 ? true : false;
    }
    isEventDirective(dir) {
        return dir.indexOf('on') === 0;
    }
    isElement(type) {
        return type === 1;
    }
    isText(type) {
        return type === 3;
    }
}

const compileUtil = {
    html(node, vm, exp) {
        console.log(arguments)
        this.bind(node, vm, exp, 'html')
    },
    text(node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    },
    bind(node, vm, exp, dir) {
        var updaterFn = updater[dir + 'Updater'];
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));
        new Watcher(vm, exp, (val) => {
            updaterFn && updaterFn(node, val)
        })
    },
    _getVMVal(vm, exp) {
        var val = vm.data;
        exp = exp.split('.');
        exp.forEach(v => {
            val = val[v]
        })
        return val
    },
}

const updater = {
    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },
    textUpdater(node, value) {
        node.textContent = typeof value === 'undefined' ? '' : value
    }
}