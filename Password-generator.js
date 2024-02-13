// in the same checkpoint, create a generate password.js file, then in your terminal, write npm install generate-password
// to use the generate pasword, go to your browser, type node generate pasword

var generator = require("generate-password");
// you can put the password in a function to enable you re-use it in another file
// just export the function to the file you want to use it
const passwordGenerator = () => {
  var password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    letters: true,
    uppercase: true,
    lowercase: true,
  });
  console.log("password:" + password);
};
module.exports = { passwordGenerator };
