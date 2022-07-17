# TypeScript学习笔记总结
## 基础配置
  1. 初始化package.json 
    `npm init`
  2. 安装typescript
    `npm install typescript`
  3. 安装ts-node
    `npm install ts-node -g // 全局安装 ts-node会让node直接运行ts代码`
  4. 生成tsconfig.json
    `tsc --init`
  5. 修改tsconfig.json文件
    `"outDir": "./dist"  // ts编译后生成的js文件保存的目录;`
    `"rootDir": "./src"  // 是自己编写的ts源文件所在的目录`
  6. 安装Parcel打包工具 支持浏览器运行TS文件
    `npm install parcel-bundler --save-dev`
  7. 在package.json中给npm添加启动项 支持启动parcel工具包

    "script": {
      "startparcel": "parcel ./index.html"
    }

> dist src package.json 必须在同一目录下
> 
> 运行tsc 可以让src中的ts代码生成到dist中的由ts转化为js的代码