const form = document.getElementById('form');
const password = document.getElementById('password');
const rePass = document.getElementById('password-two');
const checkbox = document.getElementById('content__input-politics');
 

function passwordErr(password, passwordText){
    if(password.nextElementSibling && password.nextElementSibling.textContent === passwordText) {
        return;
    }
    password.classList.add('symbols-err');
    const symbolsErr = document.createElement('div');
    symbolsErr.classList.add('symbols-message');
    symbolsErr.textContent = passwordText;
    password.after(symbolsErr);
}
password.addEventListener('input', () => {
    password.classList.remove('symbols-err');
    password.nextElementSibling.remove();
})


function errPass(rePass, rePassText) {
        if(rePass.nextElementSibling && rePass.nextElementSibling.textContent === rePassText) {
            return;
        }
        rePass.classList.add('psw-err');
        const rePassErr = document.createElement('div');
        rePassErr.classList.add('repass-text');
        rePassErr.textContent = rePassText;
        rePass.after(rePassErr);
     }

     rePass.addEventListener('input', () => {
        rePass.classList.remove('psw-err');
        rePass.nextElementSibling.remove();
    })



document.querySelectorAll('input').forEach(el => {
    el.addEventListener('blur', () => {
    if(el.value.length === 0) {
        showErr(el, "Обязательное поле");
    }
    }) 
    input.addEventListener('input', () => {
        input.classList.remove('input-err');
        input.nextElementSibling.remove();
    })
})

function showErr(input, errText) {
    if(input.nextElementSibling && input.nextElementSibling.textContent === errText) {
        return;
    }
    
    input.classList.add('input-err');

    const err = document.createElement('span');

   
    err.classList.add('err-message')
    err.textContent = errText;
    input.after(err);

}
function checkPass(password, rePass) {
    if(password.value != rePass.value) {
        errPass(rePass, 'Пароли не совпадают')
    }
 }

function checkSymbols(password){
    let symbols = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!password.value.match(symbols)){
      passwordErr(password, 'Пароль должен содержать минимум 8 символов, цифру, буквы верхнего и нижнего регистра')
} 
     }

     
function removeError(input) {
        const parent = input.parentNode;
        
            if(parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
        }



function validation(form) {

//прописать, что если присутствует хоть одна ошибка, то валидация не прошла

}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(validation(form)) {
        alert('Success');
    }

})