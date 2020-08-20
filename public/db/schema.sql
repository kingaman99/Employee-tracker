--schema

DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name varchar(50),
    last_name varchar(50),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    salary DECIMAL(10, 2),
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE manager (
	id INT NOT NULL AUTO_INCREMENT,
    manager_name VARCHAR(50),
    department_id INT,
    PRIMARY KEY(id)
);