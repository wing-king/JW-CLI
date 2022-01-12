const projectList = {
    'spa': {
        url: 'wing-king/JW-SPA',
        branch: "main",
        description: '单页面模板'
    },
    'crud': {
        url: 'wing-king/JW-SPA',
        branch: "master",
        description: '多页面模板'
    }
}
const typeList = [{
    type: "input",
    message: "请输入项目描述：",
    name: "description",
    default: ""
}, {
    type: "input",
    message: "请输入项目作者名称：",
    name: "author",
    default: ""
}, {
    type: "list",
    message: "请选择项目类型：",
    name: "project_type",
    default: "spa",
    prefix: "☆☆☆☆",
    suffix: "****",
    choices: [
        "spa",
        "mpa",
    ],
    // filter: function(val) { // 使用filter将值变为大写
    //     return val.toUpperCase();
    // }
}]

module.exports = {
    typeList,
    projectList
}