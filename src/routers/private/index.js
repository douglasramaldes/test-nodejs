const mount = require('koa-mount');

module.exports = (server) => {

	const userRouter = require('./userRouter')
	server.use(mount('/api/user', userRouter.routes())) // OK

	const companyRouter = require('./companyRouter')
	server.use(mount('/api/company', companyRouter.routes())) // OK

	const productRouter = require('./productRouter')
	server.use(mount('/api/product', productRouter.routes())) // OK

};