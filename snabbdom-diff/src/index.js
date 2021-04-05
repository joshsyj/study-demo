import h from './js/h.js'
import patch from './js/patch.js'


// var vnode = h(
//   'ul',
//   {},
//   'asdasd'
// )

var vnode = h(
  'ul',
  {},
  [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
  ]
)

var vnode2 = h(
  'ul',
  {},
  [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'F' }, 'F'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D1' }, 'D1'),
    h('li', { key: 'F1' }, 'F1'),
  ]
)
let container = document.getElementById('container');
let btn = document.getElementById('btn');

patch(container, vnode)

btn.onclick = function () {
  patch(vnode, vnode2)
}
