
let connection = require("./connect_sql");
let cTable = require("console.table");
let  ask = require("./inquirer_prompts")
printTable = function(tableType) {
    var queryLine = "";
    if(tableType === "completeTable") {
        queryLine = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, manager.manager_name " +
                    "FROM employee " +
                    "INNER JOIN role ON employee.role_id = role.id " +
                    "INNER JOIN department ON role.department_id = department.id " +
                    "INNER JOIN manager ON department.id = manager.department_id " +
                    "ORDER BY employee.last_name ASC;"
    }
    else if(tableType === "sortByRole") {
        queryLine = "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, role.title, role.salary " +
                    "FROM employee " +
                    "INNER JOIN role ON employee.role_id = role.id " +
                    "ORDER BY employee.role_id ASC;"
    }
    else if(tableType === "sortByManager") {
        queryLine = "SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, manager.manager_name " +
                    "FROM employee " +
                    "INNER JOIN manager ON employee.manager_id = manager.id " +
                    "ORDER BY employee.manager_id ASC;"
    }
    else {
        queryLine = "SELECT * FROM " + tableType;
    }

    connection.query(queryLine, function (err, res) {
        if (err) throw err;

        const viewTable = cTable.getTable(res);
        console.log(viewTable);
        selectOptions();
    
    });   
}
saveNewEntry = function(tableName, newEntryArray) {
    var columnNames = [];
    
    if(tableName === "employee") {
        columnNames = ["first_name", "last_name", "role_id", "manager_id"];
    }
    else if(tableName === "department") {
        columnNames = "department_name"
    }
    else if(tableName === "role") {
        columnNames = ["title", "salary", "department_id"];
    }
    else {
        columnNames = ["manager_name", "department_id"];
    }

    var queryLine = "INSERT INTO " + tableName + " (" + columnNames + ") VALUES (" + newEntryArray + ")";

    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log(`New ${tableName} saved.`);
        selectOptions();
    })
};

deleteEntry = function(tableName, selectedEntry) {
    var queryLine = "DELETE FROM " + tableName + " WHERE id = " + selectedEntry;
    console.log("queryLine = ", queryLine);
    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log(`${tableName} deleted.`);
        selectOptions();
    })
};

updateEntry = function(tableName, updatedColumn, updatedValue, selectedEntry) {
    
    var queryLine = "";
    if(tableName === "role") {
        queryLine = "UPDATE role SET title = " + updatedValue[0] + ", salary = " + updatedValue[1] + ", department_id = " + updatedValue[2] + " WHERE id = " + selectedEntry;
    }
    else {
        queryLine = "UPDATE " + tableName + " SET " + updatedColumn + " = " + updatedValue + " WHERE id = " + selectedEntry;
    }

    console.log("queryLine = ", queryLine);
    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log("Entry Updated!");

        selectOptions();
    })
};
exitProgram = function() {
    console.log("bye!");
    connection.end();
}
module.exports = {
    printTable: printTable,
    exitProgram: exitProgram,
};