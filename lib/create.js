const { prompt } = require("inquirer");
const { typeList } = require("./utils/list");
const { compile } = require('handlebars')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { downProject } = require('./tool/down')
const { projectList } = require('./utils/list')
const create = async(name) => {
    const data = await prompt(typeList)
    console.log('data :>> ', data);
    const packageJsonPath = join(process.cwd(), './package.json')
    const pkJson = readFileSync(packageJsonPath, 'utf-8')
    const newPkJson = compile(pkJson)({...data, name })
    writeFileSync(packageJsonPath, newPkJson)
    const { project_type } = data
    const init = await downProject({ name: project_type, configList: projectList })
    console.log('init :>> ', init);
};

module.exports = {
    create,
};