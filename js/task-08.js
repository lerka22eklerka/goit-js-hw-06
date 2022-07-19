const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;

    const formDataElement = {
      email,
      password,
    };
 if (email === "" || password === "") { 
     return alert("Please, complete all fields!"); 
      } 
        
    console.log(formDataElement);
    event.currentTarget.reset(); 
 
}
