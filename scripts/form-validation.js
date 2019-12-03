function validation() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var textArea = document.getElementById('text-area');
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var phoneError = document.getElementById('phone-error');
  var textAreaError = document.getElementById('text-error');

  var nameValidator = /^[A-Za-z. ]{3,50}$/;
  var emailValidator = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var phoneValidator = /^[0-9]{10}$/;
  var textValidator = /[^A-Za-z0-9 .'?!,@$#\-_]/;

  if(nameValidator.test(name.value)){
    name.classList.remove("invalid");
    nameError.classList.remove("errorText");
    nameError.classList.add("hiddenText");

  }else {
    name.classList.add("invalid");
    nameError.classList.add("errorText");
    nameError.classList.remove("hiddenText");

    return false;
  }
  if(emailValidator.test(email.value)){
    email.classList.remove("invalid");
    emailError.classList.remove("errorText");
    emailError.classList.add("hiddenText");

  }else {
    email.classList.add("invalid");
    emailError.classList.add("errorText");
    emailError.classList.remove("hiddenText");

    return false;
  }
  if(phoneValidator.test(phone.value)){
    phone.classList.remove("invalid");
    phoneError.classList.remove("errorText");
    phoneError.classList.add("hiddenText");

  }else {
    phone.classList.add("invalid");
    phoneError.classList.add("errorText");
    phoneError.classList.remove("hiddenText");

    return false;
  }
  if(textValidator.test(textArea.value)){
    textArea.classList.remove("invalid");
    textError.classList.remove("errorText");
    textError.classList.add("hiddenText");

  }else {
    textArea.classList.add("invalid");
    textError.classList.add("errorText");
    textError.classList.remove("hiddenText");

    return false;
  }
}
