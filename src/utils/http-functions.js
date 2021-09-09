const parse = require("url-parse");
const http = require("http");
const axios = require('axios')

module.exports.runPutRequest = function (url, method, data) {
    const parse = require('url-parse');
    const output = parse(url, true)
    const http = require('http')

    const options = {
        hostname: output.hostname,
        port: output.port,
        path: output.pathname,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(data)
    req.end()

}

module.exports.runGetJsonRequest = function (url) {
    let http = require("http");
    let urlparse = require("url-parse");
    let parsed = urlparse(url, true)

    return axios.get(url)
}