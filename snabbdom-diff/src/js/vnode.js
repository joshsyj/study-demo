export default function (sel, data, children, text, elm) {
    let { key } = data
    return { sel, data, children, text, elm, key }
}