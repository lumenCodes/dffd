const http =  require('http');
const url = require('url')

//const Car = require("./indexmodule");

const httpserver = http.createServer((req, res) =>{
    const parsedurl = url.parse(req.url, true)
    console.log(parsedurl);
    const pathname = parsedurl.pathname;
    const trimedPath = pathname.replace(/^\/+|\/+$/g, "");
    res.write('The first of many responses...');
    res.end('This is the end of the response');
    console.log('the url gotten was', trimedPath);
});

httpserver.listen(3000, ()=> {
    console.log('server is listening on port 4000')
});
//let jeep = new Car('Benz', 'white')

//jeep.introduction()