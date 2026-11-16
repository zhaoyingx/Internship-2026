# Day 1

## To-Do list

1.  前端封装http请求接口，需要独立一个文件，支持get。post——目的：理解封装的概念
2.  前后端联调：后端添加两个api方法，分别返回get和post的内容——目的：学习前后端如何联调
3.  接本地模型

### 接口设计

### /api/record

| 方法 | 请求参数 |
| --- | --- |
| GET | 无 |

请求示例：

```
GET /api/record
```

返回内容：

```json
[
  { "recordId": 1, "content": "第一条记录" },
  { "recordId": 2, "content": "第二条记录" }
]
```

### /api/add

| 方法 | 请求参数 |
| --- | --- |
| POST | `content: xx` |

请求示例：

```json
POST /api/add

{ "content": "这是一段文本" }
```

返回内容：

```json
{ "recordId": 3, "content": "这是一段文本" }
```

### /api/delete

| 方法 | 请求参数 |
| --- | --- |
| DELETE | `recordId` |

请求示例：

```
DELETE /api/delete?recordId=3
```

返回内容：

```json
{ "ok": true }
```