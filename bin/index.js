#!/usr/bin/env node

const { program, Command } = require("commander");
const { version } = require("../package.json");
const { create } = require("../lib/create")
const { tool } = require("../lib/tool")
const { add } = require("../lib/add")
const { list } = require("../lib/list")

// 版本号查询
program.version(version, '-v, --version', 'output the current version')
    //     .option('-P, --pineapple', 'Add pineapple')
    //     .option('-b, --bbq-sauce', 'Add bbq sauce')
    //     .option('-init, --init [project] ', 'init project')
    //     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    //     .parse(process.argv);
    // 项目初始化

// console.log('program.opts() :>> ', program.opts());


// 工具函数安装
program.command('tool <tool>').description('add tool  [tool]').action((res) => {
    tool(res)
})

// 模板安装
program.command('add <template> [project]').description('add template  [tool]').action(async(template, project) => {
    const data = await add(template, project)
    console.log('data :>> ', data);
})


program.command('create <name>').description('create project name ').action(async(res) => {
    const data = await create(res)
    console.log('data :>> ', data);
})



program.command('list').description('look template name ').action(async() => {
    const data = await list()
})

program.parse()