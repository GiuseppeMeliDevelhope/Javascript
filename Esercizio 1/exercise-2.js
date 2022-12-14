// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000




function calculateSalary(role) {
  switch (role) {
    case "ceo":
      this.salary=2200;
      break;
      case "manager":
        this.salary=1800;
         break;
         case "cto":
          this.salary=1800;
          break;
          case "developer":
            this.salary=1500;
            break;
    default:
      this.salary=1000;
      break;
  }
  return this.salary;
}


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);