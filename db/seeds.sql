INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (`Ari`, `Gold`, 3, NULL),
       (`Joss`, `Whedon`, 2, 4),
       (`Zack`, `Snyder`, 3, 2),
       (`Christopher`, `Nolan`, 4, 1);
       
INSERT INTO department (name)
VALUES (`Acting`),
       (`Technical`),
       (`Production`),
       (`Casting`);

INSERT INTO role (title, salary, department_id),
VALUES (`Chief Creative Officer`, 2000000, 2),
       (`Principle Director`, 23000000, 3),
       (`Casting agent`, 1000000, 4),
       (`Executive Producer`, 65000000, 3),
       (`Lead Role`, 2000000, 1),
       /* I definitely wanted to get some data in there real quick */