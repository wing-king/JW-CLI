const { typeList, promptFun } = require("./utils/list");
const { compile } = require('handlebars')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { downProject } = require('./tool/down')
const { projectList } = require('./utils/downList')
const create = async(name) => {
    const data = await promptFun(typeList)
    const { project_type } = data
    const init = await downProject({ name: project_type, configList: projectList })
    const packageJsonPath = join(process.cwd(), `./${name}/package.json`)
    const pkJson = readFileSync(packageJsonPath, 'utf-8')
    const newPkJson = compile(pkJson)({...data, name })
    writeFileSync(packageJsonPath, newPkJson)
    return init
};

module.exports = {
    create,
};