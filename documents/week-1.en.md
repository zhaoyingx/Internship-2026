# Day 1 · Set Up the Environment + Get the Project Running

Goal: install the tools and get the project running locally (backend + frontend + local model). Works on Windows / Mac.

## 1. Install the tools

Download links auto-detect your OS. After installing, **reopen your terminal**, then confirm with the verify command.

| Tool | Download | Version | Verify |
| --- | --- | --- | --- |
| Git | https://git-scm.com/downloads | any recent | `git --version` |
| Go | https://go.dev/dl/ | ≥ 1.23 | `go version` |
| Node.js | https://nodejs.org/ (pick LTS) | ≥ 22 | `node -v` && `npm -v` |
| VS Code | https://code.visualstudio.com/ | — | install extensions **Go**, **Vue - Official** |
| Ollama | https://ollama.com/download | — | `ollama --version` |

> On Mac, Git usually comes preinstalled; if not, running `git --version` prompts you to install the command line tools — just confirm.

## 2. Pull the local models

```bash
ollama pull qwen2.5:1.5b      # chat model (good at Chinese, small enough; use qwen2.5:3b if you have more RAM)
ollama pull nomic-embed-text  # embedding model, used when storing uploaded files in the vector DB
```

## 3. Create the directory and initialize frontend + backend

Create a project directory with two subprojects, `backend` and `frontend`, and initialize them.

```bash
cd Internship-2026
git init

# Backend
mkdir backend
cd backend
go mod init internship-2026
go get github.com/go-chi/chi/v5              # router library
go get github.com/philippgille/chromem-go    # embedded vector database
cd ..

# Frontend (creates the frontend directory automatically)
npm create vue@latest frontend
cd frontend
npm install
npm install element-plus
cd ..
```

## 4. Run it

The backend has no entry code yet — write a minimal `backend/main.go` to confirm it runs (we'll grow it into a real service in Week 1):

```go
package main

import "fmt"

func main() { fmt.Println("backend ok") }
```

Open two terminals:

```bash
cd backend && go run .            # Terminal A: backend
cd frontend && npm run dev        # Terminal B: frontend, open the http://localhost:5173 it prints
```

## 5. Checklist

- [ ] `go run .` prints `backend ok`
- [ ] Opening `http://localhost:5173` in the browser shows the default Vue page
- [ ] `ollama list` shows both models above

---

## Things to know

The project uses the following. If you're not familiar with one, skim its docs first (a quick glance is enough if you already have the basics):

| Topic | Used for | Reference |
| --- | --- | --- |
| Common Git commands | version control, commits | https://git-scm.com/docs |
| Go basics | backend | https://go.dev/tour/ |
| TypeScript basics | frontend | https://www.typescriptlang.org/docs/ |
| Vue framework | frontend | https://vuejs.org/guide/introduction.html |
| Element Plus (UI library) | frontend UI | https://element-plus.org/en-US/ |
| Vector database | storing uploaded files | https://github.com/philippgille/chromem-go |
| LLMs / local models | answering questions | https://ollama.com/ |
