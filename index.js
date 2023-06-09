//dependencies
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');
//app object -modules scaffolding
const app = {}
//configuation
app.config = {
    port: 3000
}
//create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log(`listening to the port ${app.config.port}`)
    })
}
//handle request response
app.handleReqRes = handleReqRes;
//start the server
app.createServer();