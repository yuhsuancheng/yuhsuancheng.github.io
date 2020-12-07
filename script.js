var todolistDiv = document.getElementById("todolist")
var input = document.getElementById("input")
var todolist = ["running", "washing dishes", "doing HW"]
render()

function addTodo() {
  todolist.push(input.value)
  render();
}

function removeTodo(index) {
  var newArray = []
  for(var i=0; i < todolist.length; i++) {
    if (i !== index) {
      newArray.push(todolist[i])
    }
  }
  todolist = newArray;
  render();
}

function render(){
  var result = ""
  for (var i = 0; i < todolist, length; i++){
    result += `<div class='todo'><button>Delete</button><div>${todolist[i]}</div></div>`
  }
}