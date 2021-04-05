import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

var vnode = h(
  'ul',
  {},
  [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
  ]
)
let container = document.getElementById('container');
let btn = document.getElementById('btn');
var vnode2 = h(
  'ul',
  {},
  [
    h('li', { key: 'E' }, 'E'),
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
  ]
)
patch(container, vnode)

btn.onclick = function () {
  patch(vnode, vnode2)
}
