/* @flow */

import 'css-modules-require-hook/preset'
import Express from 'express'
import path from 'path'
import conf from './conf'
import appRenderer from './appRenderer'

const APP_PORT: number = conf.APP_PORT
const PORT: any = process.env.PORT || APP_PORT
const app: Express = new Express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* In development serve static files from memory */
// if (process.env.NODE_ENV === 'development') {
//   const webpack = require('webpack')
//   const webpackConfig = require('../../webpack.config.babel.js')
//   const compiler = webpack(webpackConfig)
//   const webpackDevMiddleware = require('webpack-dev-middleware')

//   app.use(webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     hot: true,
//     noInfo: true,
//     stats: {
//       colors: true
//     }
//   }))

//   app.use(require('webpack-hot-middleware')(compiler))
// } else {
//   /* In production serve physical static files bundled by webpack */
//   app.use(Express.static(path.join(__dirname, '../', 'dist')))
// }

app.use(Express.static(path.join(__dirname, '../', 'dist')))

/*app.use(appRenderer)*/

// Routes
// app.get('*', (req: Object, res: Object) => {
//   res.render('index', {
//     content: req.body
//   })
// })

app.get('*', (req: Object, res: Object) => {
  res.render('index')
})

/*export default app*/

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`)
})

