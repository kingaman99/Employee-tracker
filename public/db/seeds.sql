--seeds.sql

USE employee_tracker;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Roy", "Anderson", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Halpert", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Madge", "Madsen", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Angela", "Martin", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dwight", "Shrute", 3, 1);

INSERT INTO department (department_name) VALUES ("Scranton Paper Sales");
INSERT INTO department (department_name) VALUES ("Scranton Warehouse");

INSERT INTO role (title, salary, department_id) VALUES ("Paper Sales Associate", 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Sales Associate", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Assistant to the Regional Manager", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Dock Worker", 15000, 2);

INSERT INTO manager (manager_name, department_id) VALUES ("Michael Scott", 1);
INSERT INTO manager (manager_name, department_id) VALUES ("Lonny Collins", 2);