const information = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${information.wilder.name} from ${information.wilder.campus}`,
    e : "oO",
    T : "U "
}));