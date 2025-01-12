const isLogin = true;
const ejs = require('ejs');

let result = ejs.render(`
    <% if(isLogin) { %>
    <span>欢迎回家</span>
    <% } else { %>
    <span>再见</span> 
    <% } %> 
`, {isLogin})

console.log(result);
