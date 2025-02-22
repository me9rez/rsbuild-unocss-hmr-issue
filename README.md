
<div align="center">
  <h1>rsbuild unocss hmr 问题</h1>
  <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" width="200" alt="rsbuild" />
</div>

### 问题描述

根据[官网](https://rsbuild.dev/zh/guide/basic/unocss), 配置rsbuild和unocs环境，`pnpm dev`启动开发服务器，
修改`class`，发现页面无法热更新，必须刷新页面后才能看到样式修改效果

> 注: 使用`postcss`模式可以hmr正常工作


### 安装依赖

```bash
pnpm i
```

### 运行
```
pnpm dev
```
