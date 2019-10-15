DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100) NULL,
    devoured BOOLEAN DEFAULT false
);

