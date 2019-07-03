# eslint prettier 环境搭建

实现: js 代码自动 eslint 校验，prettier 进行格式化，比如自动加语句后的`;`,自动将双引号替换成单引号，当然你也可以自行配置你喜欢的格式化风格

vscode 安装`eslint`、`prettier`插件

用到的本地 npm 包

```
"babel-eslint": "^10.0.2",
"eslint": "^6.0.1",
"eslint-config-prettier": "^6.0.0",
"eslint-plugin-prettier": "^3.1.0",
"prettier": "^1.18.2"
```

```
npm install --save-dev prettier eslint babel-eslint eslint-config-prettier eslint-plugin-prettier
```

配置`.editorconfig`
配置`.eslintrc.js`
配置`.prettierrc.js`

按配置 vscode 项目级 settings.json,避免污染全局 settings.json
`.vscode/settings.json`

附上我的全局 settings.json 的配置

```
{
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "terminal.integrated.shell.osx": "zsh",
    "editor.fontSize": 14,
    "editor.tabSize": 2,
    "keyboard.touchbar.enabled": false,
    "editor.quickSuggestions": {
        "strings": true
    },
    "eslint.enable": true,
    "eslint.options": {
        "extensions": [
            ".js",
            ".jsx",
            ".vue"
        ]
    },
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
    ],
    "beautify.config": {
        "brace_style": "collapse,preserve-inline"
    },
    "vetur.validation.template": false,
    //由于prettier不能格式化vue文件template  所以使用js-beautify-html格式化
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-aligned" //属性强制折行对齐
        }
    },
    "vetur.format.defaultFormatter.js": "prettier-eslint",
    "window.zoomLevel": 0,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
}
```
