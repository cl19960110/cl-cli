const program = require('commander')

const helpOption = () => {
  //(用法，说名，默认值)
  program.option('-d --dest <dest>','可指定路径, 例: -d /src/components','/src/components')

  //on监听 （监听某个命令，进行自定义操作）
  program.on('--help',function () {

    // console.log('');
    // console.log('Other');
    // console.log(' Other Option');
  })
}
module.exports = helpOption
