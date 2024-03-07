class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "<table><tr><th>Name</th><th>Position</th></tr>";
        this.employees.forEach(employee => {
            html += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        });
        html += "</table>";
        return html;
    }
}

class StyledEmpTable extends EmpTable {
    getStyles() {
        return "<style>table {border-collapse: collapse; width: 100%;} th, td {border: 1px solid black; padding: 8px;} th {background-color: #f2f2f2;}</style>";
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

let employees = [
    new Employee("John Doe", "Manager"),
    new Employee("Jane Smith", "Developer"),
    new Employee("Chris Johnson", "HR")
];

let empTable = new EmpTable(employees);
console.log(empTable.getHtml());
let styledEmpTable = new StyledEmpTable(employees);
console.log(styledEmpTable.getHtml());
