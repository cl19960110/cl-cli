const { promisify } = require('util') //promisify 方法可以将 Callback 转为 Promise 对象。
const path = require('path')
const download =promisify(require('download-git-repo'))

const {vueRepo} = require('../config/repo-config')
const {commandSpawn} = require('../utils/terminal')
const {complie,writeToFile,createDirSync} = require('../utils/utils')

//create项目
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

//添加vue组件
const addvuecomp = async (name,dest) => {
  //编译模板
  const result = await complie("vue-component.ejs",{name,lowerName:name.toLowerCase()})
  //将结果写入文件
  const targetPath = path.resolve(dest,`${name}.vue`)
  writeToFile(targetPath,result)
}

//添加vuepage（含vue组件及router.js）
const addVuePage= async(name,dest) => {
  const data = {name,lowerName:name.toLowerCase()}
  //编译模板
  const vueResult = await complie("vue-component.ejs",data)
  const routerResult = await complie("vue-router.ejs",data)

  //准备创建同名文件
  dest =`${dest}/${name}`
  //写入文件
  if(createDirSync(dest)){
    const targetVuePath = path.resolve(dest,`${name}.vue`)
    const targetRouterPath = path.resolve(dest,`router.js`)
    writeToFile(targetVuePath,vueResult)
    writeToFile(targetRouterPath,routerResult)
  }
}

//添加vue store
const addVueStore= async(name,dest) => {
  //编译模板
  const storerResult = await complie("vue-store.ejs",{})
  const typesResult = await complie("vue-types.ejs",{})

  //准备创建同名文件
  dest =`${dest}/${name}`
  //写入文件
  if(createDirSync(dest)){
    const targetStorerPath = path.resolve(dest,`${name}.js`)
    const targetTypePath = path.resolve(dest,`type.js`)
    writeToFile(targetStorerPath,storerResult)
    writeToFile(targetTypePath,typesResult)
  }
}

module.exports = {
  create,
  addvuecomp,
  addVuePage,
  addVueStore
}
