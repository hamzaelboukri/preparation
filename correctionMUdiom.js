
function countEnglishSpeakingEmployees(array,keyword) {
 
    
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].languages.length; j++) {
         if ( array[i].languages[j]===keyword) {
           count++
         }
        }
       
    }
    return count

}

console.log(countEnglishSpeakingEmployees(employees,"English"));


// 2
function getEmployeesByProject(array ,keyword){
    let tab=[];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].projects.length; j++) {
       if (array[i].projects[j]===keyword) {
        tab.push(array[i])
       } 
      } 
    }
    return tab;
  }
  console.log(getEmployeesByProject(employees,"Project Gamma"))



//   3



function getEmployeesByLastNameInitial(array){
   let tab=[];
    for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array[i].lastName.length; j++) {
       if (array[i].lastName[j]==="L") {
        tab.push(array[i])
        break;
       } 
     }
    }
    return tab
  }
  console.log(getEmployeesByLastNameInitial(employees))









// not work 

  
  function calculateAverageSalaryByDepartment(array){
    let tab=[]

let sum=0
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array[i].length; j++) {
    
      if (array[i].department===array[j].department) {
        tab.push(array[i])
        
       }
    }
  
  }
 

for (let i = 0; i < tab.length; i++) {
 sum += tab[i].salary
  
}
return sum/tab

}

console.log(calculateAverageSalaryByDepartment(employees))
console.log(tab)










// 17


function getEmployeesJoinedAfterYear(array,keyword){
    let tab=[]
      for (let i = 0; i < array.length; i++) {
        if (array[i].joinDate>=keyword) {
          tab.push(array[i]);
        }
        
      }
      return tab;
    
    }
    
    console.log(getEmployeesJoinedAfterYear(employees,"2020"))









     
function getMultilingualEmployees(array){
    let tab=[];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].languages.length>1) {
        tab.push(array[i])
        
        
      }
      
    }
  
    return tab;
  }
  
  
  
  console.log(getMultilingualEmployees(employees))








// 18
  
  function getMostCommonSkill(array){

    let skills=[];
for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array[i].skills.length; j++) {
 skills.push(array[i].skills[j])
}
}

let maxSkill = "";
let maxCount = 0;

for (let i = 0; i < skills.length; i++) {
  let count = 0;
  for (let j = 0; j < skills.length; j++) {
    if (skills[i] === skills[j]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    maxSkill = skills[i];
  }
}

return maxSkill;
}

console.log(getMostCommonSkill(employees));


