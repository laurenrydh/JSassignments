class Job {
    constructor(name, industry, requiresDegree, field, location, salary) {
        this.name = name
        this.industry = industry
        this.requiresDegree = requiresDegree
        this.field = field
        this.location = location
        this.salary = salary
    }

    getName() {
        console.log(this.name)
    }

    getFieldAndIndustry () {
        console.log(this.field + ' in ' + this.industry)
    }

    getLocation() {
        console.log('Located in ' + this.location)
    }

    getSalary() {
        console.log('Annual salary: $' + this.salary)
    }
}

class SoftwareEngineer extends Job {
    constructor(name, industry, requiresDegree, field, location, salary, programmingLanguage, stinkiness) {
        super(name, industry, requiresDegree, field, location, salary)
        this.programmingLanguage = programmingLanguage 
        this.stinkiness = stinkiness
    }
    getProgrammingLanguage() {
        console.log('Proficient in ' + this.programmingLanguage)
    }
    getStinkiness() {
        console.log('Stinkiness level = ' + this.stinkiness)
}
}

let job1 = new Job('Sales Associate', 'Retail', false, 'Customer Service', 'Blaine, MN', 35000)
job1.getName()
job1.getFieldAndIndustry()
job1.getLocation()
job1.getSalary()

let job2 = new Job('Human Resource Specialist', 'Government', true, 'Human Resources', 'Saint Paul, MN', 65000)
job2.getName()
job2.getFieldAndIndustry()
job2.getLocation()
job2.getSalary()

let job3 = new Job('Sous Chef', 'Restaurant', false, 'Culinary Arts', 'Minneapolis, Mn', 50000)
job3.getName()
job3.getFieldAndIndustry()
job3.getLocation()
job3.getSalary()

let job4 = new SoftwareEngineer('Cybersecurity Engineer', 'Finance', false, 'Software', 'Remote in Minnesota', 95000, 'python and SQL', 99)
job4.getName()
job4.getFieldAndIndustry()
job4.getLocation()
job4.getSalary()
job4.getProgrammingLanguage()
job4.getStinkiness()
