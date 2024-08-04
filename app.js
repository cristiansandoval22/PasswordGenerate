const btnGenerate = document.getElementById("btn__generate");
const btnCopy = document.getElementById("btn__copy");
const inputPassword = document.getElementById("inputPassword");
const alertContainer = document.querySelector(".alert__container");


btnGenerate.addEventListener("click", () => {
    createPassword()
})

btnCopy.addEventListener("click", () => {
    copyPassword()
    alertContainer.classList.add(`active`)
    setTimeout(() =>{
        alertContainer.classList.remove(`active`)
    }, 2000)
    
})


function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;

    let password = ""

    for (let index = 0; index < passwordLength; index++) {

        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputPassword.value = password;
    alertContainer.innerText = `${password} copied!`
}

function copyPassword () {
    // inputPassword.select()
    // inputPassword.setSelectionRange(0, 9999);
    // navigator.clipboard.writeText(inputPassword.value);
    inputPassword.select();
    document.execCommand("copy");

}


