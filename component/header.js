import { setScreen } from "../app.js";
import { Chat } from "./chat.js";
import { Home } from "./home.js";
import { Product } from "./product.js";

class Header{
    $header;
    $up;
    $logo;
    $search;
    $search_bar;
    $other;
    $cart;
    $chat;
    $spanLogout;
    $btnLogout;
    $down;
    $type_group_sneakers;
    $type_group_streetwear;
    $type_group_handbags;
    $type_group_watches;

    constructor(){
        this.$header = document.createElement('header');
        this.$header.classList.add('header');

        this.$up = document.createElement('div');
        this.$up.classList.add('up');

        this.$logo = document.createElement('div');
        this.$logo.classList.add('logo');
        this.$logo.addEventListener('click', this.moveToHome);
        this.$logo.innerHTML = 'StockX';

        this.$search = document.createElement('div');
        this.$search.classList.add('search');

        this.$search_bar = document.createElement('input');
        this.$search_bar.type = 'text';
        this.$search_bar.name = 'search';
        this.$search_bar.placeholder = 'Search...';

        this.$other = document.createElement('div');
        this.$other.classList.add('other');

        this.$cart = document.createElement('span');
        this.$cart.classList.add('cart');
        this.$cart.innerHTML = 'Cart';

        this.$chat = document.createElement('span');
        this.$chat.classList.add('chat');
        this.$chat.addEventListener('click', this.moveToChat);
        this.$chat.innerHTML = 'Chat';

        this.$spanLogout = document.createElement('span');
        this.$spanLogout.classList.add('logout');
        
        this.$btnLogout = document.createElement('button');
        this.$btnLogout.innerHTML = 'Logout';
        this.$btnLogout.addEventListener('click', this.handleLogout);
        
        this.$down = document.createElement('div');
        this.$down.classList.add('down');

        this.$type_group_sneakers = document.createElement('span');
        this.$type_group_sneakers.classList.add('sneakers');
        this.$type_group_sneakers.addEventListener('click', this.moveToProduct);
        this.$type_group_sneakers.innerHTML = 'Sneakers';

        this.$type_group_streetwear = document.createElement('span');
        this.$type_group_streetwear.classList.add('streetwear');
        this.$type_group_streetwear.addEventListener('click', this.moveToProduct);
        this.$type_group_streetwear.innerHTML = 'Streetwear';

        this.$type_group_handbags = document.createElement('span');
        this.$type_group_handbags.classList.add('handbags');
        this.$type_group_handbags.addEventListener('click', this.moveToProduct);
        this.$type_group_handbags.innerHTML = 'Handbags';

        this.$type_group_watches = document.createElement('span');
        this.$type_group_watches.classList.add('watches');
        this.$type_group_watches.addEventListener('click', this.moveToProduct);
        this.$type_group_watches.innerHTML = 'Watches';
    }

    moveToHome = () =>{
        const home = new Home();
        setScreen(home);
    }

    moveToChat = () =>{
        const chat = new Chat();
        setScreen(chat);
    }

    moveToProduct = () =>{
        const product = new Product();
        setScreen(product);
    }
    handleLogout = () =>{
        firebase.auth().signOut();
    };

    render(){
        this.$search.appendChild(this.$search_bar);
        this.$spanLogout.appendChild(this.$btnLogout);
        this.$other.appendChild(this.$cart);
        this.$other.appendChild(this.$chat);
        this.$other.appendChild(this.$spanLogout);
        this.$up.appendChild(this.$logo);
        this.$up.appendChild(this.$search);
        this.$up.appendChild(this.$other);
        this.$down.appendChild(this.$type_group_sneakers);
        this.$down.appendChild(this.$type_group_handbags);
        this.$down.appendChild(this.$type_group_streetwear);
        this.$down.appendChild(this.$type_group_watches);
        this.$header.appendChild(this.$up);
        this.$header.appendChild(this.$down);
        return this.$header;
    }
}

export{Header};
