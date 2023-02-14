// Signup form fields
const context = {
  formField: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name'
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password'
    }
  ]
}; 

// Handlebars
const source = document.getElementById("templateHB").innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
document.getElementById("form-field").innerHTML = compiledHtml;


// Form Validation
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fnError = document.getElementById("firstName-error");
const lnError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const pwError = document.getElementById("password-error");
const iconError = "url('images/icon-error.svg')";

function validateForm() {
	let IS_VALID = true;
	
	if (firstName.validity.valid) {
		fnError.textContent = "";
		firstName.style.border = "1px solid var(--grayish-blue)";
		firstName.style.backgroundImage = "none";
	} else {
		fnError.textContent = "First Name cannot be empty";
		firstName.style.border = "2px solid var(--red)";
		firstName.style.backgroundImage = iconError;
		IS_VALID = false;
	}
	
	if (lastName.validity.valid) {
		lnError.textContent = "";
		lastName.style.border = "1px solid var(--grayish-blue)";
		lastName.style.backgroundImage = "none";
	} else {
		lnError.textContent = "Last Name cannot be empty";
		lastName.style.border = "2px solid var(--red)";
		lastName.style.backgroundImage = iconError;
		IS_VALID = false;
	}
	
	if (email.validity.valid) {
		emailError.textContent = "";
		email.style.border = "1px solid var(--grayish-blue)";
		email.style.backgroundImage = "none";
	} else {
		emailError.textContent = "Looks like this is not an email";
		email.style.border = "2px solid var(--red)";
		email.style.backgroundImage = iconError;
		IS_VALID = false;
	}
	
	if (password.validity.valid) {
		pwError.textContent = "";
		password.style.border = "1px solid var(--grayish-blue)";
		password.style.backgroundImage = "none";
	} else {
		pwError.textContent = "Password cannot be empty";
		password.style.border = "2px solid var(--red)";
		password.style.backgroundImage = iconError;
		IS_VALID = false;
	}
	
	if (IS_VALID === true) {
		alert("Awesome! Please check your email to access your free trial!");
	}
	
	return IS_VALID;
}