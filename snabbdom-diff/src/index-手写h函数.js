import h from './js/h.js'
// var vnode = h(
//   'div',
//   { props: {} },
//   1
// )

// var vnode = h(
//   'div',
//   { props: {} },
//   [
//     h('p',{},'aa'),
//     h('p',{},'aa'),
//     h('p',{},'aa'),
//     h('p',{},'aa')
//   ]
// )

var vnode = h(
  'div',
  { props: {} },
  [
    h('p', {}, 'aa'),
    h('p', {}, 'aa'),
    h('p', {}, 'aa'),
    h('p', {},
      h('p', {}, 'aa')
    )
  ]
)

console.log(vnode)