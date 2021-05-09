/**
 * 执行终端命令相关的代码
 */

const {spawn} = require('child_process')

const commandSpawn = (...args)=> {
  return new Promise((resolve,reject) => {
    //开启子进程
    const childProcess = spawn(...args)

    //同步子进程的打印信息到当前进程
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    //监听close，结束Promise
    childProcess.on('close',()=>{
      resolve()
    })
  })
}
module.exports = {
  commandSpawn
}
