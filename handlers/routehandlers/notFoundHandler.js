/**
 * Title:Not Found Handler
 * Description :404 Not Found Handler
 */

//module scaffolding
const Handler = {}

Handler.notFoundhandler = (requestProperties,callback) =>{
    console.log(requestProperties);
    callback(404,{
        message:"Your requested url was not found"
    })
}

module.exports = Handler;