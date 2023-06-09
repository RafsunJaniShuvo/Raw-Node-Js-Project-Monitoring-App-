/**
 * Title: Routes
 * Description: Application Routes
 * Author: Rafsun 
 * Date: 9.06.23
 * 
 */

//dependencies
const {Samplehandler} = require('./handlers/routehandlers/sampleHandler')

const route = {
    'sample': Samplehandler,
}

module.exports = route ;