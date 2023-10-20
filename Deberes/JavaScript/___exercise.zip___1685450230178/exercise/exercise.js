


function calculateSalary(role) {
  let month = 28;

  switch(role) {
    case "ceo":
      income=2200;
  
      break;
    case "manager":
      income=1800;
      break;
  
    case "cto":
      income=1800;
      break;
  
    case "developer":
      income=1500;
      break;
  
    default:
      income=1000;
      break;
  };
  let salary= income/month;
  return salary;
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log("CEO gets "+ Math.round(ceoSalary) + "€/hour");
console.log("Manager gets "+Math.round(managerSalary) + "€/hour");
console.log("CTO gets "+Math.round(ctoSalary) + "€/hour");
console.log("Developer gets "+Math.round(developerSalary)+ "€/hour");
console.log("Other gets "+Math.round(otherSalary) + "€/hour");