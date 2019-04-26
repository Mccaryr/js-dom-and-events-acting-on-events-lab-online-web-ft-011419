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
  const unorderedList = document.querySelector("ul")
  const list = document.createElement("li")
  
  list.innerHTML = retrieveEmployeeInformation()
  list.appendChild(unorderedList);
}
