"use strict";

const form = document.querySelector(".to-do-form");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input-to-do");

function handleEventlisteners() {
  //Updates the task

  // const update = document.querySelector(".update");
  // const updatedTask = document.querySelector(".update-task-text");
  // update.addEventListener("click", function(e) {
  //   e.preventDefault();

  //   console.log("You clicked update btn");
  //   //Need to target closest paragraph and update text

  //   //value from updated text
  //   // const hej = updatedTask.value;

  //   // taskaa.closest(".task-text").innerHTML = "he";
  // });

  //Delete the task
  const deleteBtns = document.querySelectorAll(".delete");

  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", function(e) {
      e.preventDefault();

      const task = e.currentTarget.closest("div");
      // console.log(task);

      //dosen't work as i want, but almost!!
      task.remove();
    });
  });

  const editBtns = document.querySelectorAll(".edit");
  const taskForm = document.querySelector(".task-form");

  //Display the edit form on click
  editBtns.forEach(editBtn => {
    console.log("you clicked edit");

    editBtn.addEventListener("click", function(e) {
      e.preventDefault();

      //Need to find the closes task-form and toggle class active
      const test = e.currentTarget.parentElement;

      //Need to target the closest p not the closest div
      //and then update text.
      console.log(test);
      taskForm.classList.toggle("active");
    });
  });

  //move finished task to bottom and make it green
  const doneBtns = document.querySelectorAll(".done");

  doneBtns.forEach(doneBtn => {
    doneBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const taskWrapper = e.currentTarget.closest("div");
      console.log("you clicked done");

      taskWrapper.classList.add("finished");
    });
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskValue = input.value;

  const div = document.createElement("div");

  div.classList.add("wrapper");

  const template = `  <p id="hej" class="task-text"> ${taskValue}</p> 
 
  <button class="done"> Done </button>  
  <button class="edit"> Edit </button>
    <form class="task-form">
    <label for="update-task">Update task</label>
    <input name="update-task" class="update-task-text" placeholder="Update task"></input>
    <button class="update">Save</button>
    <button class="delete">Delete</button>
   </form>

  `;

  div.innerHTML = template;

  form.appendChild(div);
  form.reset();

  handleEventlisteners();
});
