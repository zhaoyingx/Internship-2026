# Day 1 · 搭环境 + 跑通项目

目标:装好工具,把项目在本机跑起来(后端 + 前端 + 本地模型)。Windows / Mac 通用。

## 1. 安装工具

下载链接会自动识别你的系统;装完**重开终端**再用验证命令确认。

| 工具 | 下载 | 版本要求 | 验证 |
| --- | --- | --- | --- |
| Git | https://git-scm.com/downloads | 任意较新版 | `git --version` |
| Go | https://go.dev/dl/ | ≥ 1.23 | `go version` |
| Node.js | https://nodejs.org/ (选 LTS) | ≥ 22 | `node -v` && `npm -v` |
| VS Code | https://code.visualstudio.com/ | — | 装插件 **Go**、**Vue - Official** |
| Ollama | https://ollama.com/download | — | `ollama --version` |

> Mac 上 Git 一般自带;没有的话运行 `git --version` 会提示安装命令行工具,点确认即可。

## 2. 拉本地模型

```bash
ollama pull qwen2.5:1.5b      # 对话模型(中文友好、够小;内存大可换 qwen2.5:3b)
ollama pull nomic-embed-text  # 嵌入模型,上传资料存向量库时用
```

## 3. 自己建目录、初始化前后端

建一个项目目录，里面分 `backend` 和 `frontend` 两个子项目，并做初始化。

```bash
cd Internship-2026
git init

# 后端
mkdir backend
cd backend
go mod init internship-2026
go get github.com/go-chi/chi/v5              # 路由库
go get github.com/philippgille/chromem-go    # 嵌入式向量数据库
cd ..

# 前端（会自动创建 frontend 目录）
npm create vue@latest frontend
cd frontend
npm install
npm install element-plus
cd ..
```

## 4. 跑起来

后端还没有入口代码,先写个最小的 `backend/main.go` 验证能跑(第 1 周再扩成真正的服务):

```go
package main

import "fmt"

func main() { fmt.Println("backend ok") }
```

开两个终端:

```bash
cd backend && go run .            # 终端 A:后端
cd frontend && npm run dev        # 终端 B:前端,打开它给出的 http://localhost:5173
```

## 5. 验收

- [ ] `go run .` 打印出 `backend ok`
- [ ] 浏览器打开 `http://localhost:5173` 能看到 Vue 默认页面
- [ ] `ollama list` 能看到上面两个模型


---

## 需要了解的知识点

项目会用到下面这些,不熟的先过一遍文档(有基础的扫一眼即可):

| 知识点 | 用在哪 | 参考 |
| --- | --- | --- |
| Git 常用命令 | 代码管理、提交 | https://git-scm.com/docs |
| Go 基础语法 | 后端 | https://go.dev/tour/ |
| TypeScript 基础语法 | 前端 | https://www.typescriptlang.org/docs/ |
| Vue 框架 | 前端 | https://cn.vuejs.org/guide/introduction.html |
| Element Plus(UI 组件库) | 前端界面 | https://element-plus.org/zh-CN/ |
| 向量数据库 | 存上传的资料 | https://github.com/philippgille/chromem-go |
| 大模型 / 本地模型 | 回答问题 | https://ollama.com/ |

## 掌握内容

1.  环境搭建
2.  前端开发基础知识
3.  typescript语法

# Day 2 · 开发前端页面

To-Oo

1.  修改前端启动页面
2.  布局设计（参考Claude/ChatGPT布局）
3.  从Element Plus中选取合适的UI组件
4.  实现前端页面

## 注册Element Plus

参考[Quick Start](https://element-plus.org/en-US/guide/quickstart)

## 添加组件

container/button/header/input..

工程设计参考文档：[Components Basics](https://vuejs.org/guide/essentials/component-basics.html)

## 掌握知识点

1.  如何在vue中使用ui-Framework，如Element Plus
2.  基础UI组件的使用
3.  前端工程设计规范，重点阅读[Components Basics](https://vuejs.org/guide/essentials/component-basics.html)


# Day 2-3 · 开发后端接口

## Preparation

### [Install](https://go.dev/doc/install)

### Tutorials

[Golang Tutorials](https://go.dev/doc/tutorial/)
[A tour of Go](https://go.dev/tour/welcome/1)
[Sample Code](https://gobyexample.com/)

掌握基础的Golang语法，独立完成Sample code中前半部分的基础内容，可以新建一个GitHub仓库，用来维护Go Learning部分的内容

## backend项目建立

1.  添加一个接口文件，返回文本内容
2.  整理工程结构
3.  前端配置，打通前后端的请求
4.  前端可以把后端的内容显示在页面上

## 后续

1.  参考main.go的实现，完成前端内容的展示
2.  了解下[go gin](https://github.com/gin-gonic/gin), 接口改用gin实现
3.  了解下前端await用法，可以自己Google，自己总结下理解