const program = require('commander')
const {create} = require('./actios')

const createCommands = ()=> {
  program
    .command('create <project> [others...]')
    .description('描述信息')
    .action(create)
}
module.exports = createCommands
