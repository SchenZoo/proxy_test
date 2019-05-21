const express = require('express')
const http = require('http')
const requestIp = require('request-ip')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const server = http.createServer(app)
const port = 3005

server.listen(port, () => {
  console.log('Test proxy server listning on port: ' + port)
})

app.get('/', (req, res) => {
  const clientIp = requestIp.getClientIp(req)

  return res.json({
    packetIp: clientIp,
    requestIp: req.ip,
    ips: req.ips,
    host: req.hostname,
    headers: req.headers,
    originalUrl: req.originalUrl,
  })
})
