class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
        };

        this.departments[department].push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let bestSalary = 0;
        let bestDep = '';

        for (const key in this.departments) {
            this.departments[key].sort((a, b) => {
                return b.salary - a.salary || a.username.localeCompare(b.username);
            });

            let average = this.departments[key].reduce((acc, el) => {
                return acc + el.salary;
            }, 0) / this.departments[key].length;

            this.departments[key].average = average;

            if (average > bestSalary) {
                bestSalary = average;
                bestDep = key;
            }
        }

        return `Best Department is: ${bestDep}
Average salary: ${this.departments[bestDep].average.toFixed(2)}\n`
            + this.departments[bestDep].map(e => {
                return e.username + ' ' + e.salary + ' ' + e.position;
            }).join('\n')
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());
