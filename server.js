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
    ])
}