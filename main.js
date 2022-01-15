import { setScreen } from "./app.js";
import { Home } from "./component/home.js"
import { Login } from "./component/login.js";

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        const home = new Home();
        setScreen(home);
    } else{
        const login = new Login();
        setScreen(login);
    }
})