import {setScreen} from '../app.js'
import { InputGroup } from './input_group.js'
import {Register} from './register.js'

class Login{
    $container;
    $containerChildren;
    $pageName;
    $title;
    $inputGroupEmail;
    $inputGroupPassword;
    $form;
    $btnSubmit;
    $linkToRegister;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('login');

        this.$containerChildren = document.createElement('div');
        this.$containerChildren.classList.add('center', 'flex-col', 'containerChildren');

        this.$pageName = document.createElement('h1');
        this.$pageName.innerHTML = 'StockX';

        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Login';

        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');

        this.$form = document.createElement('form');
        this.$form.addEventListener('click', this.handleSubmit);

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';

        this.$linkToRegister = document.createElement('div');
        this.$linkToRegister.classList.add('btn-link');
        this.$linkToRegister.addEventListener('click', this.moveToRegister);
        this.$linkToRegister.innerHTML = 'Create new Account';
    }

    moveToRegister = () =>{
        const register = new Register();
        setScreen(register);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        console.log(email,password);
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((userInfo)=>{
            console.log(userInfo);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        this.$form.appendChild(this.$inputGroupEmail.render());
        this.$form.appendChild(this.$inputGroupPassword.render());
        this.$form.appendChild(this.$btnSubmit);

        this.$containerChildren.appendChild(this.$pageName);
        this.$containerChildren.appendChild(this.$title);
        this.$containerChildren.appendChild(this.$form);
        this.$containerChildren.appendChild(this.$linkToRegister);

        this.$container.appendChild(this.$containerChildren);
        return this.$container;
    }
}

export{Login};