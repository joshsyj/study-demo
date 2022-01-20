const { tplReplace } = require('../utils.js')
const { getOptions } = require('loader-utils')
function tplLoader(source) {
    source = source.replace(/\s*/g, '');
    const { log } = getOptions(this)
    console.log('source')
    console.log(source)//<div>{{name}}</div><div>{{age}}</div>
    console.log('log')
    console.log(log)//true
    console.log('this')
    // console.log(this)


    const _log = log ? `console.log('compiled the file is from ${this.resourcePath}')` : ''
    return `
        export default (options)=>{
            ${tplReplace.toString()}
            ${_log.toString()}
            return tplReplace('${source}', options)
        }
    `
}

module.exports = tplLoader