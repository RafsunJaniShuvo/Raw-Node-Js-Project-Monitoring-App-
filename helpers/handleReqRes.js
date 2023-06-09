/**
 * Title: Handle Request Response
 * Description:Handle Request Response
 * Author: Rafsun 
 * Date: 9.06.23
 * / */

 //dependencies
 const url = require('url');
 const {StringDecoder} = require('string_decoder');
 const routes = require('../route')
 const {notFoundHandler} = require('../handlers/routehandlers/notFoundHandler')

 const handler = {}

 handler.handleReqRes = (req,res) =>{

    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject =parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8')

    const requstProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
        decoder
    };

    let realData = '';
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
   
   chosenHandler(requstProperties,(statusCode,payload)=>{
    statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
    payload = typeof(payload) === 'object' ? payload : {};
    const payloadString = JSON.stringify(payload);
    res.writeHead(statusCode);
    res.end(payloadString)
   })


    req.on('data',(buffer)=>{
    realData +=decoder.write(buffer);
   })
   req.on('end',()=>{
    realData +=decoder.end();
    console.log(realData,56545);
    res.end('Hello World')
   })
   

    // res.end(trimmedPath);
}

 module.exports =handler;