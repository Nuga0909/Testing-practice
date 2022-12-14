const { moduleExpression } = require("@babel/types");

const stringLength = (string) => {
    if(string.length < 1 || string.length > 10){
        return 'input not valid';
    } else return string.length;
};

module.exports = stringLength;