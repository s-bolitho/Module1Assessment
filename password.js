let password = ("DevMountain1234")

if (password.length >= 10 && password.length <=20 && /[a-zA-Z]/.test(password) && /\d/.test(password)){
  console.log("success")
}
else {
  console.log("failure")
}