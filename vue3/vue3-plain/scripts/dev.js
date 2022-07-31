const args = require('minimist')(process.argv.slice(2)) // minimist用来解析命令行参数
const { resolve } = require('path')
const { build } = require('esbuild')
// 打包的目标是谁
const target = args._[0] || 'reactivity'
// 打包的格式是什么
const format = args.f || 'global'

const pkg = require(resolve(__dirname, `../packages/${target}/package.json`))

const outputFormat = format.startsWith('global') ? 'iife' : format === 'cjs' ? 'cjs' : "esm"

// 输出文件
const outfile = resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`)

// 天生支持ts
build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile,
  bundle: true, // 把所有的包全部打包到一起
  sourcemap: true,
  format: outputFormat, // 输出的格式
  globalName: pkg.buildOptions.name, // 打包的全局的名字
  platform: format === 'cjs' ? 'node' : 'browser', // 平台
  watch: { // 监控文件的变化
    onRebuild(error) {
      if (!error) console.log('rebuilt~~~')
    }
  }
}).then(() => {
  console.log('watching~~~')
})