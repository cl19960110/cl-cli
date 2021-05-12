#!/usr/bin/env node
const program = require('commander')
const {version} = require('./package.json')

const helpOption = require('./lib/core/help')
const createCommands = require('./lib/core/create')

//查看版本号
program.version(version,'-v,--version')

 //增加自定义的命令
helpOption()

//创建其他指令
createCommands()

program.parse(process.argv)
