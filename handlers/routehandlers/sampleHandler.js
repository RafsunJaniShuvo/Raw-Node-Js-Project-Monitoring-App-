/**
 * Title:Sample Handler
 * Description : Sample Handler
 */

//module scaffolding
const Handler = {}

Handler.Samplehandler = (requestProperties,callback) =>{
    console.log(requestProperties);
    callback(200,{
        message:"This is a sample url"
    });
}

module.exports = Handler;