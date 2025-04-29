// 1

function getFirstEmployeeFirstName(array,keyword){
    let list=[];
    for (let i = 0; i < array.length; i++) {
       
        if (array[i].firstName===keyword) {
            list.push(array[i])
            
        }
        
    }
    return list
  }

  console.log(getFirstEmployeeFirstName(employees,"Jean"))








  
  function getLastEmployeeLastName(array, keyword){
    let search =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i].lastName===keyword) {

        search.push(array[i])
        }
    }
    return search
  }

  console.log(getLastEmployeeLastName(employees,"Leroy"))







  
function getEmployeeDepartmentById(array,int){
    let id=[];
    for (let i = 0; i < array.length; i++) {
    if(array[i].id===int){
        id.push(array[i])

    }
        
    }

    return id;
}

console.log(getEmployeeDepartmentById(employees,5))











function hasInactiveEmployees(array,keyword){
    let cative=[];
        for (let i = 0; i < array.length; i++) {
            if(array[i].isActive===true)
            cative.push(array[i])
        }
        return cative
    
     }
    
     console.log(hasInactiveEmployees(employees))




     
     let max=[];
     function getHighestPaidEmployee(array ,keyword){
       for (let i = 0; i < array.length; i++) {
         for (let j = i+1; j < array.length; j++) {
          if (array[i].salary<array[j].salary) {
            let vare = array[i];
           array[i] = array[j];
           array[j] = vare;
           
          }
           
         }
       }
       max = array[0];
     return max;
      
   
     }
   
     console.log(getHighestPaidEmployee(employees))
      





     
  function countEmployeesInDepartment(array,keyword){
    let count=0
    for (let i = 0; i < array.length; i++) {
        if (array[i].department=== keyword) {
            count++
            
        }
        
    }
    return count
      }
    
    
      console.log(countEmployeesInDepartment(employees,"Développement"))



    //  9

function getUniqueDepartments(array){
  let Unique=[];
  for (let i = 0; i < array.length; i++) {
      let count=0 ;
   for (let j = i+1; j < array.length; j++) {
    if (array[i].department===array[j].department) {
      count++
      break;
    }  
   }
   if (count===0) {
      Unique.push(array[i].department)   
  }
  }
  return Unique;
}

console.log(getUniqueDepartments(employees))





// 10


function hasEmployeesWithoutProjects(array){
  // let tab=[];
      // let validation=true;
      for (let i = 0; i < array.length; i++) {
          if (array[i].projects.length===0) {
              true
          }
          
          
      }
  return false
  
  }
  
  console.log(hasEmployeesWithoutProjects(employees))