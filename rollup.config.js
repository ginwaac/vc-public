const fs = require('fs-extra')
const path = require('path')
const vue = require('rollup-plugin-vue2')

function isDir (dir) {
  return fs.lstatSync(dir).isDirectory()
}

function createRollupConfig (file, name) {
  const config = {
    input: file,
    output: {
      file: `lib/${name}/index.js`,
      format: 'es',
      name: name,
      sourcemap: true
    },
    plugins: [
      vue()
    ]
  }
  return config
}

const packages = {}
const dir = path.join(__dirname, './packages')

const files = fs.readdirSync(dir)
files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    packages[file] = `packages/${file}/index.js`
  }
})

const buildPackages = []

for (const name in packages) {
  const file = packages[name]
  buildPackages.push(createRollupConfig(file, name))
}

export default buildPackages
