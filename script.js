function checkValidateEmail(email) {
  let regx = /^[a-zA-Z0-9]+@[a-zA-z]+(\.[a-z]{2,3}){1,2}$/;
  if (regx.test(email)) {
    console.log(`Email: ${email} hợp lệ!`);
  } else {
    console.log(`Email: ${email} không hợp lệ!`);
  }
}

let email = 'a@gmail.com.vn';
checkValidateEmail(email);
email = 'ab@yahoo.com';
checkValidateEmail(email);
email = 'abc@hotmail.com';
checkValidateEmail(email);
email = 'heloo@yahoo.com.vn';
checkValidateEmail(email);
email = '@#abc@gmail.com';
checkValidateEmail(email);
email = '@gmail.com';
checkValidateEmail(email);
email = 'ab@gmail.';
checkValidateEmail(email);