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
  'div',
  {
    class: { c: true },
  },
  h(
    'ul',
    [
      h('li', [1, 2, 3, 4]),
      h('li', [1, 2, 3, 4]),
      h('li', [1, 2, 3, 4]),
      h('li', [1, 2, 3, 4]),
      h('li', [1, 2, 3, 4]),
    ]
  ))
console.log(vnode)


patch(document.getElementById('container'), vnode)

