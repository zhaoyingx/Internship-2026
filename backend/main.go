package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/api/hello", helloHandler)
	r.GET("/api/record", listRecordHandler)

	addr := ":8080"
	log.Printf("Server listening on http://localhost%s", addr)
	if err := r.Run(addr); err != nil {
		log.Fatal(err)
	}
}
