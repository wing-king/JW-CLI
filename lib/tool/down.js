const download = require("download-git-repo");
const rimraf = require("rimraf");
const { promptFun, forceReplace } = require('../utils/list')
const { join } = require("path");
const { existsSync } = require('fs')
    //  '/src/components'  组件
    // '/utils'


const dir = (name, project = "./") => join(process.cwd(), project, name);
const ora = require("ora");
const downProject = async({ name, projectPath, configList }) => {
    if (existsSync(dir(name))) {
        console.log(`文件夹${name}在${process.cwd()}目录下已存在`);
        const op = await promptFun(forceReplace)
        if (!op) {
            console.log('请重新设置名称')
            return
        }
    }
    rimraf.sync(dir(name), {});
    const file = configList[name];
    const spinner = ora(`🚀${name}项目正在安装中...`).start();
    return new Promise((resolve, reject) => {
        try {
            download(`${file.url}#${file.branch}`, dir(name, projectPath), (err) => {
                resolve(true);
                spinner.succeed();
            });
        } catch (error) {
            spinner.fail();
            reject(false);
        }
    });
};

module.exports = {
    downProject,
};