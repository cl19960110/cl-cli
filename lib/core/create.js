const program = require('commander')
const inquirer = require('inquirer')
const {create,addvuecomp,addVuePage,addVueStore} = require('./actios')

//创建指令
const createCommands = ()=> {
  program
    .command('create <projectName> ')
    .description('create vue项目,例如：cle-cli create demo ')
    .action((name)=>{
      inquirer.prompt([{
        type: 'list',
        name: 'tool',
        message: '你打算用什么包管理工具install?',
        choices: ['npm','yarn']
      }])
      .then((answers) => {
        const tool = JSON.parse(JSON.stringify(answers)).tool
        create(name,program.opts().store,tool)
      })




    })

  program
    .command('addvuecomp <name>')
    .description('add vue组件,例如：cle-cli addvuecomp helloWorld ')
    .action((name) => {
      addvuecomp(name,program.opts().dest)
    })

  program
    .command('addvuepage <pageName>')
    .description('add vue page,例如：cle-cli addvuepage Home [-d src/pages]')
    .action((pageName) => {
      addVuePage(pageName,program.opts().dest )
    })

  program
    .command('addvuestore <storeName>')
    .description('add vue store,例如：cle-cli addVueStore home [-d src/store]')
    .action((pageName) => {
      addVueStore(pageName,program.opts().dest)
    })
}
module.exports = createCommands
