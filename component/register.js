import {setScreen} from '../app.js';
import {InputGroup} from './input_group.js';
import {Login} from './login.js';

class Register{
    $container;
    $containerChildren;
    $pageName;
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;

    $feedbackMessage;
    $btnSubmit;
    $linkToLogin;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('register');
        this.$containerChildren = document.createElement('div');
        this.$containerChildren.classList.add('center', 'flex-col', 'containerChildren');
        this.$pageName = document.createElement('h1');
        this.$pageName.innerHTML = 'StockX';
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit);
       
        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupDisplayName = new InputGroup('text', 'Display Name', 'displayName');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');
        this.$inputGroupConfirmPassword = new InputGroup('password', 'Confirm PassWord', 'confirmPassword');

        this.$feedbackMessage = document.createElement('div');

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';

        this.$linkToLogin = document.createElement('div');
        this.$linkToLogin.classList.add('btn-link');
        this.$linkToLogin.innerHTML = 'Back to Login'
        this.$linkToLogin.addEventListener('click', this.moveToLogin);
    }

    moveToLogin = () =>{
        const login = new Login();
        setScreen(login);
    }
    handleSubmit = (evt)=>{
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupDisplayName.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupConfirmPassword.setError(null);

        if(!email){
            this.$inputGroupEmail.setError('Email cannot be empty!');
        }

        if(!displayName){
            this.$inputGroupDisplayName.setError('Display name cannot be empty!');
        }

        if(password.length < 6){
            this.$inputGroupPassword.setError('Password length must be greater or equal than 6!');
        }
        if(confirmPassword != password){
            this.$inputGroupConfirmPassword.setError('Confirm password not matched!');
        }
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                this.$feedbackMessage.innerHTML = 'Register successfully! Please check your inbox';
                firebase.auth().currentUser.sendEmailVerification();
                this.$inputGroupEmail.setInputValue('');
                this.$inputGroupDisplayName.setInputValue('');
                this.$inputGroupPassword.setInputValue('');
                this.$inputGroupConfirmPassword.setInputValue('');
            })
            .catch((error) =>{
                this.$feedbackMessage.innerHTML = error.toString();
                console.log(error);
            })
    }

    render(){
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$containerChildren.appendChild(this.$pageName);
        this.$containerChildren.appendChild(this.$title);
        this.$containerChildren.appendChild(this.$feedbackMessage);
        this.$containerChildren.appendChild(this.$formRegister);
        this.$containerChildren.appendChild(this.$linkToLogin);
        this.$container.appendChild(this.$containerChildren);
        return this.$container;
    }
}

export{Register};