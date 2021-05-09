const program = require('commander')
const {create,addvuecomp,addVuePage,addVueStore} = require('./actios')

//创建指令
const createCommands = ()=> {
  program
    .command('create <project> [others...]')
    .description('创建项目')
    .action(create)

  program
    .command('addvuecomp <name>')
    .description('add vue组件,例如：cle-cli addvuecomp helloWorld ')
    .action((name) => {
      addvuecomp(name,program.dest || 'src/components')
    })

  program
    .command('addvuepage <pageName>')
    .description('add vue page,例如：cle-cli addvuepage Home [-d src/pages]')
    .action((pageName) => {
      addVuePage(pageName,program.dest || 'src/pages')
    })

  program
    .command('addvuestore <storeName>')
    .description('add vue store,例如：cle-cli addVueStore home [-d src/store]')
    .action((pageName) => {
      addVueStore(pageName,program.dest || 'src/store')
    })
}
module.exports = createCommands
