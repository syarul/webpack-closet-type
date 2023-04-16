const webpack = require('webpack')
const config = require('../webpack.test.js')

test('Webpack:build_should_success', async function () {
  const promise = new Promise(resolve => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(err || stats.toJson().errors)
      } else {
        expect(stats.hasWarnings()).toBe(false)
        resolve()
      }
    })
  })
  await promise
})

test('Webpack:build_should_fail', async () => {
  config.entry = './sample/error-regex.closet.js'
  config.output.filename = 'failed.js'
  const promise = new Promise(resolve => webpack(config, (err, stats) => {
    if (err) {
      resolve(new Error(`Webpack build failed: ${err}`))
    }
    if (stats && stats.hasErrors()) {
      resolve(new Error(`Webpack build failed: ${stats.toJson().errors}`))
    }
    resolve()
  }))
  const res = await promise
  expect(() => {
    if (res instanceof Error) {
      throw new Error(res)
    }
  }).toThrow()
})
