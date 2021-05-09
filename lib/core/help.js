const program = require('commander')

const helpOption = () => {
  //(用法，说名，默认值)
  program.option('-w --why','a why cli')
  program.option('-d --dest <dest>','a destion folder, 例: -d /src/components','default')

  //on监听 （监听某个命令，进行自定义操作）
  program.on('--help',function () {

    // console.log('');
    // console.log('Other');
    // console.log(' Other Option');
  })
}
module.exports = helpOption
