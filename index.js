// Рандомная идея авторизации и регистрации(WIP)
// todo Registration

const authBtn = document.querySelector("#signInBtn");
const authPopUp = document.querySelector("#authPopUp")
const authPopUpBackground = document.querySelector(".back")
const authUsername = document.querySelector("#uNameInput")
const authPassword = document.querySelector("#pWordInput")

const database = new Map()

const usernames = {
  length: 0
}

const users = []

let kaker = { username: "kaker", password: "123123" }
handleUser(kaker)

authBtn.addEventListener("click", authValidation)
function authValidation() {
  const activate = [
    authPopUp.classList.add("_active"),
    authPopUpBackground.classList.add("_inactive"),
    setTimeout(() => {
      authPopUp.addEventListener("click", () => {
        authPopUpBackground.classList.remove("_inactive");
        authPopUp.classList.remove("_active");
      })
      authPopUpBackground.addEventListener("click", () => {
        authPopUpBackground.classList.remove("_inactive");
        authPopUp.classList.remove("_active");
      })
    }, 1)
  ]

  if (authUsername.value === "" || authPassword.value === "") {
    authPopUp.innerHTML = "Вы заполнили не все поля!"
    authPopUp.style.color = "red"
  }
  else if (users.includes(authUsername.value) && authPassword.value === database.get(authUsername.value)) {
    authPopUp.style.color = "#5fbf24"
    authPopUp.innerHTML = "Вы успешно авторизовались!"
  }
  else {
    authPopUp.innerHTML = "Логин или пароль введен неправильно!"
    authPopUp.style.color = "red"
  }
  return activate
}

function handleUser(user) {
  if (!database.has(user.username)) {
    database.set(user.username, user.password)
    usernames[user.username] = user.password
    usernames.length++
    users.push(user.username)
  }
  return database.get(user);
}
