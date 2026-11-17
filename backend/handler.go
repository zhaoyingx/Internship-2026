package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func helloHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "This is message from the backend",
	})
}

func listRecordHandler(c *gin.Context) {
	records := []gin.H{
		{"id": 1, "content": "第一条记录"},
		{"id": 2, "content": "第二条记录"},
		{"id": 3, "content": "第三条记录"},
	}
	c.JSON(http.StatusOK, records)
}
