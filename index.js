// I want to write like this：
// var ejs=require('ejs');
// 
// But now, I can only write like this
var ejs = require('./ejs'),
    path = require('path');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    var 
        query = {},
        opts = {
            filename:path.relative(process.cwd(), this.resourcePath)
        },
        
        // Chinese:我想在调用这里传入某些参数,通过ejs在内部回调执行,以达到不影响EJS里的代码
        // My English is very poor,so It's from Google translate :D   
        // I would like to call some of the parameters passed here, through ejs in the internal callback implementation, in order to achieve does not affect the code in the EJS 
        template = ejs.compile(source, opts)({});

    return 'module.exports = ' + JSON.stringify(template);
};