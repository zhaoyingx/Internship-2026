本周关键点

# 前端

1.  http底层公共方法
2.  接口设计（写markdown文档）
3.  接口设计内容写成前端对应接口方法
4.  替换当前前端中的http请求，例如sidebar里面的请求历史记录，使用getRecords

# 后端

1.  后端工程结构设计（md文档，画架构图）
2.  数据库表结构设计（md文档）
3.  建好对应的文件
4.  接口实现
5.  ...

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
  { "id": 1, "content": "第一条记录" },
  { "id": 2, "content": "第二条记录" }
]
```

### /api/record?id={id}

| 方法 | 请求参数 |
| --- | --- |
| GET | `id` |

请求示例：

```
GET /api/record?id=1
```

返回内容：

```json
{ "id": 1, "content": "第一条记录" }
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
{ "id": 3, "content": "这是一段文本" }
```

### /api/delete?id={id}

| 方法 | 请求参数 |
| --- | --- |
| DELETE | `id` |

请求示例：

```
DELETE /api/delete?id=3
```

返回内容：

```json
{ "ok": true }
```

# Day 2
## To-Do list
1.  添加网络层——新增一个handler.go， 添加网络层方法
2.  安装apifox，学习如何调试后端接口，看后端返回结果
3.  前后端联调