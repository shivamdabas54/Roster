// Load JSON data
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    renderDate();
    renderShift(data.shift);
    renderUpdates(data.updates);
    renderTasks(data.tasks);
    renderCalendar();
  });

function renderDate() {
  const today = new Date();
  document.getElementById("date").innerText =
    today.toDateString();
}

function renderShift(shift) {
  const container = document.getElementById("shiftContainer");
  shift.forEach(p => {
    const div = document.createElement("div");
    div.className = "person";
    div.innerHTML = `
      <strong>${p.name}</strong><br/>
      <small>${p.role}</small>
    `;
    container.appendChild(div);
  });
}

function renderUpdates(updates) {
  const ul = document.getElementById("updates");
  updates.forEach(u => {
    const li = document.createElement("li");
    li.innerText = `${u.title} (${u.time})`;
    ul.appendChild(li);
  });
}

function renderTasks(tasks) {
  const ul = document.getElementById("tasks");
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""}/>
      ${t.task} - ${t.day}
    `;
    ul.appendChild(li);
  });
}

function renderCalendar() {
  const cal = document.getElementById("calendar");
  const today = new Date();

  cal.innerHTML = `
    <p>${today.toLocaleString("default", { month: "long" })} ${today.getFullYear()}</p>
  `;
}
