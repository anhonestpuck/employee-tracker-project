const inquirer = require('inquirer');
const mysql = require ('mysql2');
//First thing I did was start with my server page. I think this is the best place to start for me.

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'jtp101491',
//         database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
// );

console.log(
    ` _______ .___  ___. .______    __        ______   ____    ____  _______  _______    .___________..______          ___       ______  __  ___  _______ .______      
    |   ____||   \/   | |   _  \  |  |      /  __  \  \   \  /   / |   ____||   ____|   |           ||   _  \        /   \     /      ||  |/  / |   ____||   _  \     
    |  |__   |  \  /  | |  |_)  | |  |     |  |  |  |  \   \/   /  |  |__   |  |__      ---|  |----|  |_)  |      /  ^  \   |  ,----'|  '  /  |  |__   |  |_)  |    
    |   __|  |  |\/|  | |   ___/  |  |     |  |  |  |   \_    _/   |   __|  |   __|         |  |     |      /      /  /_\  \  |  |     |    <   |   __|  |      /     
    |  |____ |  |  |  | |  |      |  ----.|  --  |     |  |     |  |____ |  |____        |  |     |  |\  \----./  _____  \ |  ----.|  .  \  |  |____ |  |\  \----.
    |_______||__|  |__| | _|      |_______| \______/      |__|     |_______||_______|       |__|     | _| ._____/__/     \__\ \______||__|\__\ |_______|| _| ._____|`
);
//found a really cool star wars one for the log

const employeeInfo = () => {
    inquirer.prompt([
        {
            name: 'init',
            type: 'list',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Emmployee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]).then((response) => {
        switch (response.init) {
            case 'View Employees':
                viewEmployees ();
                break;
        }
    })
}

//I'm going to write each function now and test as I go.
const viewEmployees = () => {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, 
    role.title AS role, role.salary, 
    department.name AS department, employee.manager_id
    FROM employee
    LEFT JOIN employee AS manager
    ON employee.manager_id = manager.id
    JOIN role
    ON role.id = employee.role_id
    JOIN department
    ON role.department_id = department.id
    ORDER BY employee.id `, (err, results) =>{
        if(err) return console.log(err);
        console.table(results);
        employeeInfo();
    });
}
//I had to comment out the function to make sure nothing broke.  I still haven't connected my db stuff so I'll probabbly go work on that.