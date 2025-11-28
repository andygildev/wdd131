
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) {
      status.textContent = "Name is too short!";
      status.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Please enter a valid email!";
      status.style.color = "red";
      return;
    }

    if (message.length < 5) {
      status.textContent = "Message is too short!";
      status.style.color = "red";
      return;
    }

    status.textContent = `Thanks, ${name}! Your message has been received.`;
    status.style.color = "green";

    form.reset();
  });
}
