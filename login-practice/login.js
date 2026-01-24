const users = [
  { name: 'john', password: '1234' },
  { name: 'alice', password: 'password' },
];
const loginButton = document.querySelector('#login');
const loginForm = document.querySelector('.form-container');
const newPage = document.querySelector('#welcomePage');
const newMessage = document.querySelector('#welcomeMessage');
const logoutBtn = document.querySelector('#logout');

loginButton.addEventListener('click', (e) => {
  //e means event
  e.preventDefault(); // stops from reloading the form (its by default)
  let userFound = null;
  const inputName = document.querySelector('#name').value;
  const inputPwd = document.querySelector('#pwd').value;
  if (inputName === '' || inputPwd === '') {
    window.alert('Please enter both username and password.');
    return;
  }
  users.forEach((user) => {
    if (user.name === inputName) {
      userFound = user;
      return;
    }
  });
  if (!userFound) {
    window.alert('invalid userName');
  } else if (userFound.password !== inputPwd) {
    window.alert('invalid password');
  } else {
    loginForm.classList.add('hidden');
    newMessage.textContent = `Welcome ${inputName}`;
    newPage.classList.remove('hidden');
  }
});
logoutBtn.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  newPage.classList.add('hidden');
  document.querySelector('#name').value = '';
  document.querySelector('#pwd').value = '';
});
function myFunction() {
  const inputPwd = document.querySelector('#pwd');
  if (inputPwd.type === 'password') {
    inputPwd.type = 'text';
  } else {
    inputPwd.type = 'password';
  }
}
