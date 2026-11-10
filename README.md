# Internship-2026 · Local Knowledge Q&A System

An internship practice project: build a **local knowledge Q&A system** — like a small ChatGPT, but the knowledge comes from files you upload yourself.

| Part | Tech | Role |
| --- | --- | --- |
| Frontend (web UI) | Vue 3 + Element Plus + Vite | chat box, file upload |
| Backend (server) | Go | handles requests, stores files, calls the model |
| Vector database | chromem-go (embedded, ships with backend) | remembers your uploaded files |
| Local model | Ollama | the "brain" that actually answers |

---

## 📂 Project structure

```
Internship-2026/
├── backend/      backend (Go server)
├── frontend/     frontend (Vue web app)
├── documents/    guides + things to know
└── README.md
```

---

## 🗓️ Guides (in `documents/`)

**Start from [Week 1](documents/week-1.en.md), one step at a time.**

| When | Doc | Content |
| --- | --- | --- |
| Week 1 | [documents/week-1.en.md](documents/week-1.en.md) | Set up the dev environment from scratch and get the project running (Windows / Mac) |
| Week 2+ | (coming) | — |

---

## Roadmap (about 3~3.5 weeks)

- **Week 1 · Wire up frontend + backend, connect the AI**: set up the environment; build a chat UI skeleton where the frontend sends messages to the backend (echo first to prove the link works); then connect the backend to the Ollama local model for real "ask → AI answers", and polish the chat box (multi-turn, loading state).
  Outcome: a working web-based "mini ChatGPT" you can chat with.
- **Week 2 · Upload files into the vector database**: build the "upload a txt file" feature; the backend chunks the content, turns it into vectors, and stores it in the vector database (chromem-go, no separate database to install).
  Outcome: you can upload a txt and confirm it was stored in the database.
- **Week 3 · Make the AI use your files (RAG) + wrap up**: on each question, first find the most relevant content from the database and send it to the model along with the question; then polish the UI, clean up the code, and prepare a short demo.
  Outcome: after uploading files, the AI answers **based on your uploaded content** — full project working.
- **Stretch goals (optional)**: streaming output (answers appear token by token), cite which snippet the answer came from, manage multiple uploaded files, support more formats (PDF, etc.), package and deploy.

---

## ⚡ Already set up? Quick start

```bash
# Terminal A: backend
cd backend && go mod tidy && go run .

# Terminal B: frontend
cd frontend && npm install && npm run dev
```

> First time, or don't have Go / Node / Ollama yet? Start with [documents/week-1.en.md](documents/week-1.en.md).
