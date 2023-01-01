package config

import "os"

const (
	appName    = "backend"
	production = "production"
)

type Config struct {
	Env     string `env:"ENV" envDefault:"development"`
	Port    string `env:"PORT" envDefault:"8080"`
	DB_URL  string `env:"DB_URL"`
	DB_USER string `env:"DB_USER"`
	DB_PASS string `env:"DB_PASS"`
}

// check if the environment is production
func (c *Config) IsProduction() bool {
	return c.Env == production
}

func (c *Config) GetPort() string {
	return c.Port
}

// fetch the config from the environment
func GetConfig() *Config {
	return &Config{
		Env:     os.Getenv("ENV"),
		Port:    os.Getenv("PORT"),
		DB_URL:  os.Getenv("DB_URL"),
		DB_USER: os.Getenv("DB_USER"),
		DB_PASS: os.Getenv("DB_PASS"),
	}
}
