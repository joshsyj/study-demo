import tpl from './app.tpl'
const app = document.querySelector('#app')
const info = {
    name: 'aaa',
    age: 29
}

console.log(tpl(info))
app.innerHTML = tpl(info)