package main

import (
	"amar-jay/rn-fitness/backend/config"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	surrealdb "github.com/surrealdb/surrealdb.go"
)

var (
	app = gin.Default()
)

func main() {

	// load .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// db connection
	_, err := dbConn()
	if err != nil {
		log.Fatalf("Database Connection error: %s", err)
	}

	//	app.Use(cors.New())

	app.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "hello world")
	})

	app.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	log.Printf("Starting the application...")
	app.Run()
}

func dbConn() (*surrealdb.DB, error) {
	env := config.GetConfig()
	log.Println(env.DB_URL)
	db, err := surrealdb.New(env.DB_URL)
	if err != nil {
		return nil, err
	}

	_, err = db.Signin(map[string]interface{}{
		"username": env.DB_USER,
		"pass":     env.DB_PASS,
	})

	if err != nil {
		return nil, err
	}

	// specify Namespace and Database
	//	_, err = db.Use("ns", "demo")
	//	return db, err

	return db, nil
}
