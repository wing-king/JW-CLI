const download = require("download-git-repo");
const rimraf = require("rimraf");

const { join } = require("path");
//  '/src/components'  组件
// '/utils'
const dir = (name, project = "./") => join(process.cwd(), project, name);
const ora = require("ora");
const downProject = ({ name, projectPath, configList }) => {
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