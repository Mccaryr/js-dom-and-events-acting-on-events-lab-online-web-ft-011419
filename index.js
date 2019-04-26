function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  const employeeInfo = document.querySelector('input').value
  return employeeInfo
}

function addNewElementAsLi(){
  const list = document.querySelector("ul")
    const newList = document.createElement("li")
  
     newList.innerHTML = retrieveEmployeeInformation()
  
     list.appendChild(newList)
}
