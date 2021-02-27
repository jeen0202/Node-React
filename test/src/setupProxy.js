const {createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware("/member", {
            target : "http://localhost:3001/",
            changeOrigin: true           
        })
    );
};