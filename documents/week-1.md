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
