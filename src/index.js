document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
// I need to create a cosntant for the submit button? I am unsure of how to do this.
//      This is the form below? it is located in the index.html file
// <form id="create-task-form" action="#" method="POST">
//      <label for="new-task-description">Task description:</label>
//      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//      <input type="submit" value="Create New Task">
// </form>

// <div id="list">
//      <h2>My Todos:</h2>
//      <ul id="tasks">
//      </ul>
// </div>



const form = document.querySelector("#create-task-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskContainer = document.querySelector("#tasks")
    const newTask = document.createElement('li')
    const userText = document.querySelector("#new-task-description").value
    newTask.textContent = userText
    taskContainer.append(newTask)



  
    // newTask.textContent = document.getElementById("#new-task-description").value
    // li.append(newTask) // ??? probably not correct append method same with above?


    // all of lines 20 - 25 feel wrong?


});


// I need an event Listener for the submit button using the consant from above

//something needs to happen when the submit button is clicked. f(x) Task to be listed to the task list lu li
// f(x) to append the text from the Form text area to the  ul li element

// send help 
  
});
