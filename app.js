var app = require('koa')();
var route = require('koa-route');

app.use(route.get("/:name", homepageFor));
function *homepageFor(name){
  this.body = 'Welcome to Footbook, ' + name;
};

app.listen(3000);
console.log("The app is listening on http://localhost:3000");
