const { promisify } = require('util') //promisify 方法可以将 Callback 转为 Promise 对象。

const download =promisify(require('download-git-repo'))

const {vueRepo} = require('../config/repo-config')
const {commandSpawn} = require('../utils/terminal')

const create = async (projectName,others) => {
  console.log("start create");
  //1. clone项目
  await download(vueRepo,projectName,{clone:true})
  //2. 执行 npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  console.log('install');
  await commandSpawn(command,['install'],{cwd: `./${projectName}`})
  //3. 执行 npm run serve
  console.log('run serve');
  await commandSpawn(command, ['run','serve'],{cwd: `./${projectName}`})
  //4. 打开浏览器
}

module.exports = {
  create
}
