const url = require('url')

const route = "http://localhost:3500/adduser?username=Thelma&age=25"
// console.log(route)

let ul = url.parse(route, true)
// console.log(ul)
params = ul.query;
console.log(params)
console.log(params.username)
console.log(params.age)
console.log(params)