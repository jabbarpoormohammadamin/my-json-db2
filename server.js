const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

// اینجا محدودیت 30 آیتم رو حذف می‌کنیم
server.use((req, res, next) => {
  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
