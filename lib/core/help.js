const program = require('commander')

const helpOption = () => {
  //(用法，说名，默认值)
  program.option('-d --dest <dest>','可指定路径, 例: -d /src/components','/src/components')
  program.option('-s --store <store>','指定仓库地址, 例: -s https://github.com/coderwhy/hy-vue-temp.git','https://github.com/coderwhy/hy-vue-temp.git')

  //on监听 （监听某个命令，进行自定义操作）
  program.on('--help',function () {

    console.log('');
    console.log('Other');
    console.log('冲冲冲');
  })
}
module.exports = helpOption
