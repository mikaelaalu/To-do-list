"use strict";

const form = document.querySelector(".toDo-form");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input-toDo");

form.addEventListener("submit", e => {
  e.preventDefault();

  const task = input.value;

  const div = document.createElement("div");

  const template = ` <p> ${task}</p> 
  <button class="edit"> Edit </button>
    <form class="task-form">
    <label for="update-task">Update task</label>
    <textarea name="update-task" class="update-task-textarea" placeholder="Update task"></textarea>
    <button class="update">Save</button>
    <button class="delete">Delete</button>
   </form>
  `;

  div.innerHTML = template;

  form.appendChild(div);

  const update = document.querySelector(".update");
  update.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("You clicked update btn");
  });

  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("You clicked delete btn");
  });
});

// const taskForm = document.querySelector(".task-form");

// const editBtn = document.querySelector(".edit");

// if (editBtn) {
//   editBtn.addEventListener("click", event => {
//     // event.preventDefault();
//     console.log(event.currentTarget);
//     taskForm.classList.toggle("show");
//   });
// }
