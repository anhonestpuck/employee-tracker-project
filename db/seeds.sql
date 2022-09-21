

INSERT INTO department (name)
VALUES ('Acting'),
       ('Technical'),
       ('Production'),
       ('Casting');

INSERT INTO role (title, salary, department_id)
VALUES ('Chief Creative Officer', 2000000, 2),
       ('Principle Director', 2300000, 3),
       ('Casting agent', 1000000, 4),
       ('Executive Producer', 65000000, 3),
       ('Lead Role', 2000000, 1);
       /* I definitely wanted to get some data in there real quick */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ari', 'Gold', 3, NULL),
       ('Joss', 'Whedon', 2, 1),
       ('Zack', 'Snyder', 4, 3),
       ('Christopher', 'Nolan', 3, 1);