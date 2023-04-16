const spawn = require('child_process').spawn

module.exports = function (source) {
  const callback = this.async()
  const child = spawn('node', ['./node_modules/closet-type/bin/compiler.js'])

  let output = ''
  child.stdout.on('data', data => {
    output += data
  })

  let error = ''
  child.stderr.on('data', data => {
    error += data
  })

  child.on('close', code => {
    if (code === 0) {
      callback(null, output)
    } else {
      callback(new Error(`Child process exited with code ${code}: ${error}`))
    }
  })

  child.stdin.write(source)
  child.stdin.end()
}
