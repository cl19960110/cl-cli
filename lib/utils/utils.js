const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

//编译模板
const complie = (templateName,data) => {
  const templatePosition = `../templates/${templateName}`
  const templatePath = path.resolve(__dirname,templatePosition)
  return new Promise((resolve,reject) => {
    ejs.renderFile(templatePath,{data},{},(err,result)=>{
      if(err){
        console.log(err);
        reject(err)
        result
      }
      resolve(result)
    })
  })
}

//递归创建文件夹
const createDirSync = (pathName) => {
  if(fs.existsSync(pathName)){
    return true
  }
  if(createDirSync(path.dirname(pathName))){
    fs.mkdirSync(pathName)
    return true
  }
}

//写入文件
const writeToFile = (path,content) => {
    return fs.promises.writeFile(path,content)
}
module.exports={
  complie,
  writeToFile,
  createDirSync
}