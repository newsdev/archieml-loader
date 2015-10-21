var archieml = require('archieml')

module.exports = function(content) {
    this.cacheable && this.cacheable();
    var aml = archieml.load(content);
    this.value = [aml]
    return "module.exports = " + JSON.stringify(aml, undefined, "\t") + ";";
};
