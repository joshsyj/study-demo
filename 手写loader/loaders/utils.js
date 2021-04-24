function tplReplace(template, obj) {
    return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
        return obj[key]
    })
}

module.exports = {
    tplReplace
}