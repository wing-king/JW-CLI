const { prompt } = require("inquirer");
// inquirer 单/多页面选择
const typeList = [{
        type: "input",
        message: "请输入项目描述：",
        name: "description",
        default: "",
    },
    {
        type: "input",
        message: "请输入项目作者名称：",
        name: "author",
        default: "",
    },
    {
        type: "list",
        message: "请选择项目类型：",
        name: "project_type",
        default: "spa",
        prefix: "☆☆☆☆",
        suffix: "****",
        choices: ["spa", "mpa"],
        // filter: function(val) { // 使用filter将值变为大写
        //     return val.toUpperCase();
        // }
    },
];

// 是否需要强制替换文件夹
const forceReplace = [{
    type: "confirm",
    message: "是否替换原来的文件夹",
    name: "result",
    default: true,
}, ];

// inquire 通用函数
const promptFun = async(list) => {
    try {
        return await prompt(list);
    } catch (error) {
        return new Error(error)
    }
};
module.exports = {
    typeList,
    forceReplace,
    promptFun,
};