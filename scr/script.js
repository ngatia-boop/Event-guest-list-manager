document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-name");
  const guestList = document.getElementById("guest-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = input.value.trim();
    if (!name) return;

    if (guestList.children.length >= 10) {
      alert("Guest list is full. Maximum of 10 guests allowed.");
      return;
    }

    addGuest(name);
    input.value = "";
  });

  function addGuest(name) {
    const li = document.createElement("li");
    li.classList.add("not-attending"); // default state

    const span = document.createElement("span");
    span.textContent = name;

    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "Toggle RSVP";
    rsvpButton.addEventListener("click", () => {
      li.classList.toggle("attending");
      li.classList.toggle("not-attending");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      li.remove();
    });

    li.append(span, rsvpButton, removeButton);
    guestList.appendChild(li);
  }
});