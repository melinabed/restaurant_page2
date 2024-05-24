const content = document.querySelector("#content");

function contact() {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "page-content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const title = document.createElement("div");
  title.setAttribute("id", "contact-title");
  title.textContent = "Contact Us!";
  contactContainer.appendChild(title);

  const form = document.createElement("form");
  contactContainer.appendChild(form);

  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Name";
  name.minLength = 3;
  form.appendChild(name);

  const phoneNumber = document.createElement("input");
  phoneNumber.type = "tel";
  phoneNumber.placeholder = "Phone Number";
  phoneNumber.required = true;
  form.appendChild(phoneNumber);

  const email = document.createElement("input");
  email.type = "email";
  email.placeholder = "Email";
  email.required = true;
  form.appendChild(email);

  const message = document.createElement("textarea");
  message.placeholder = "Message";
  message.rows = 5;
  form.appendChild(message);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.setAttribute("id", "submit-btn");
  form.appendChild(submitButton);

  pageContent.appendChild(contactContainer);
  content.appendChild(pageContent);
}

export default contact;
