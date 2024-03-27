const http = require("http")

const requestListener = function (req, res) {
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200
        var texto = '<h1>Pablo Henrique Southier </h1> </br>'
        texto += '<img src="https://pbs.twimg.com/profile_images/1756957380468752384/Th-XmUO4_400x400.jpg"</br>'
        res.end(texto)
    } else if (req.method === "GET" && req.url === "/about") {
        res.statusCode = 200
        res.end("<h1>Faço curso técnico em programação para internet e trabalho a 3 anos na empresa Irmãos Cancelli, atualmente atuo na função de Analista </h1>")
    } else if (req.method === "GET" && req.url === "/portfolio") {
        res.statusCode = 200
        res.end("<h1>Fiz um curso de aprendizagem industrial em internet em 2019 </h1>")
    } else if (req.method === "GET" && req.url === "/curriculum") {
        res.statusCode = 200
        res.end("<h1>Meu curriculum:  </h1>")
    } else if (req.method === "GET" && req.url === "/contact") {
        res.statusCode = 200
        res.end("<h1>Contato: Instagram: @pablo_southier; Twitter: pablo_southier; Telefone para contato: 49 9 9995 9386 </h1>")
    } else {
        res.statusCode = 404
        res.end("<h1>Page not found </h1>")
    }
}

const server = http.createServer(requestListener)
server.listen(3000)
