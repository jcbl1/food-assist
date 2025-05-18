# food-assist

本仓库为《企业级应用软件设计与开发》课程作业的前端部分，作业形式要求个人独立完成前后端开发并融入AI元素。本项目提供一个模拟的外卖点餐界面和一个聊天对话框，在聊天对话框中用户可询问机器人有哪些餐品并进行点餐，支持立即配送和预约配送。后端基于Spring Boot框架，涉及到部分私有资产暂不开源。后端利用function calling提供查询当前时间、搜寻餐品向量数据库以及点餐等API，后续可能利用MCP实现支持更多模型。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
