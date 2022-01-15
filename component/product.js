import { setScreen } from "../app.js";
import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { ProductDetail } from "./product_detail.js";

let data = [
    { name:'Nike Air Force 1 Low Supreme White', id: 15, type: 'Giày', price: 4000000, photo:'../image/tải xuống.jfif', url: '../information/information.html', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'../image/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'../image/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'../image/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'../image/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'../image/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020},
    { name:'Adidas OZWEEGO TR', id: 34, type: 'Giày', price: 2000000, photo:'../image/SHO6.jpeg', url: '#', rating: 5, stock: 496, madein: 'Campuchia', year: 2020},
    { name:'Adidas Energyfalcon', id: 35, type: 'Giày', price: 1850000, photo:'../image/SHO7.jpeg', url: '#', rating: 1, stock: 1096, madein: 'Lào', year: 2021},
]

class Product{
    $container;
    $header;
    $footer;
    $main_content;
    $main;
    $topic;
    $topicText;
    $topic_title_1;
    $topic_title_2;
    $filter;
    $filter_title;
    $filter_group_1;
    $filter_title_1;
    $filter_label_1;
    $filter_input_1;
    $br1;
    $filter_label_2;
    $filter_input_2;
    $br2;
    $filter_label_3;
    $filter_input_3;
    $br3;
    $filter_label_4;
    $filter_input_4;
    $br4;

    $filter_group_2;
    $filter_title_2;
    $filter_label_5;
    $filter_input_5;
    $br5;
    $filter_label_6;
    $filter_input_6;
    $br6;
    $filter_label_7;
    $filter_input_7;
    $br7;

    $filter_group_3;
    $filter_title_3;
    $filter_label_8;
    $filter_input_8;
    $br8;
    $filter_label_9;
    $filter_input_9;
    $br9;
    $filter_label_10;
    $filter_input_10;
    $br10;
    $filter_label_11;
    $filter_input_11;
    $br11;
    
    $product;
    $sneaker1;
    $img_sneaker_1;
    $name_sneaker_1;
    $stock_sneaker_1;
    $price_sneaker_1;
    $sneaker2;
    $img_sneaker_2;
    $name_sneaker_2;
    $stock_sneaker_2;
    $price_sneaker_2;
    $sneaker3;
    $img_sneaker_3;
    $name_sneaker_3;
    $stock_sneaker_3;
    $price_sneaker_3;
    $sneaker4;
    $img_sneaker_4;
    $name_sneaker_4;
    $stock_sneaker_4;
    $price_sneaker_4;
    $sneaker5;
    $img_sneaker_5;
    $name_sneaker_5;
    $stock_sneaker_5;
    $price_sneaker_5;
    $sneaker6;
    $img_sneaker_6;
    $name_sneaker_6;
    $stock_sneaker_6;
    $price_sneaker_6;
    $sneaker7;
    $img_sneaker_7;
    $name_sneaker_7;
    $stock_sneaker_7;
    $price_sneaker_7;
    $sneaker8;
    $img_sneaker_8;
    $name_sneaker_8;
    $stock_sneaker_8;
    $price_sneaker_8;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('similar_product');

        this.$header = new Header();
        this.$footer = new Footer();

        this.$main_content = document.createElement('div');
        this.$main_content.classList.add('main_content');

        this.$main = document.createElement('div');
        this.$main.classList.add('main');

        this.$topic = document.createElement('div');
        this.$topic.classList.add('topic');
        this.$topicText = document.createElement('div');
        this.$topicText.classList.add('topicText');

        this.$topic_title_1 = document.createElement('h1');
        this.$topic_title_1.innerHTML = 'Sneakers';

        this.$topic_title_2 = document.createElement('p');
        this.$topic_title_2.innerHTML = 'On StockX, every sneaker you want is always available and authentic. Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy and more!';
        
        this.$filter = document.createElement('div');
        this.$filter.classList.add('filter');
        this.$filter_title = document.createElement('h1');
        this.$filter_title.innerHTML = 'Bộ lọc tìm kiếm';

        this.$filter_group_1 = document.createElement('div');
        this.$filter_group_1.classList.add('filter_group');
        this.$filter_title_1 = document.createElement('h2');
        this.$filter_title_1.innerHTML = 'Nơi bán';
        this.$filter_input_1 = document.createElement('input');
        this.$filter_input_1.type = 'checkbox';
        this.$filter_input_1.name = 'noi-ban1';
        this.$filter_input_1.id = 'noi-ban1';
        this.$filter_input_1.value = 'Ha Noi';
        this.$filter_label_1 = document.createElement('label');
        this.$filter_label_1.innerHTML = 'Hà Nội';
        this.$br1 = document.createElement('br');
        this.$filter_input_2 = document.createElement('input');
        this.$filter_input_2.type = 'checkbox';
        this.$filter_input_2.name = 'noi-ban2';
        this.$filter_input_2.id = 'noi-ban2';
        this.$filter_input_2.value = 'Sai Gon';
        this.$filter_label_2 = document.createElement('label');
        this.$filter_label_2.innerHTML = 'Sài Gòn';
        this.$br2 = document.createElement('br');
        this.$filter_input_3 = document.createElement('input');
        this.$filter_input_3.type = 'checkbox';
        this.$filter_input_3.name = 'noi-ban3';
        this.$filter_input_3.id = 'noi-ban3';
        this.$filter_input_3.value = 'Da Nang'
        this.$br3 = document.createElement('br');
        this.$filter_label_3 = document.createElement('label');
        this.$filter_label_3.innerHTML = 'Đà Nẵng';
        this.$filter_input_4 = document.createElement('input');
        this.$filter_input_4.type = 'checkbox';
        this.$filter_input_4.name = 'noi-ban4';
        this.$filter_input_4.id = 'noi-ban4';
        this.$filter_input_4.value = 'Hai Duong'
        this.$filter_label_4 = document.createElement('label');
        this.$filter_label_4.innerHTML = 'Hải Dương';
        this.$br4 = document.createElement('br');

        this.$filter_group_2 = document.createElement('div');
        this.$filter_group_2.classList.add('filter_group');
        this.$filter_title_2 = document.createElement('h2');
        this.$filter_title_2.innerHTML = 'Loại sản phẩm';
        this.$filter_input_5 = document.createElement('input');
        this.$filter_input_5.type = 'checkbox';
        this.$filter_input_5.name = 'giay-bong-da';
        this.$filter_input_5.id = 'giay-bong-da';
        this.$filter_input_5.value = 'giay-bong-da';
        this.$filter_label_5 = document.createElement('label');
        this.$filter_label_5.innerHTML = 'Giày bóng đá';
        this.$br5 = document.createElement('br');
        this.$filter_input_6 = document.createElement('input');
        this.$filter_input_6.type = 'checkbox';
        this.$filter_input_6.name = 'giay-bong-ro';
        this.$filter_input_6.id = 'giay-bong-ro';
        this.$filter_input_6.value = 'giay-bong-ro'
        this.$filter_label_6 = document.createElement('label');
        this.$filter_label_6.innerHTML = 'giày bóng rổ';
        this.$br6 = document.createElement('br');
        this.$filter_input_7 = document.createElement('input');
        this.$filter_input_7.type = 'checkbox';
        this.$filter_input_7.name = 'giay-di-hang-ngay';
        this.$filter_input_7.id = 'giay-di-hang-ngay';
        this.$filter_label_7 = document.createElement('label');
        this.$filter_label_7.innerHTML = 'Giày đi hàng ngày';
        this.$br7 = document.createElement('br');

        this.$filter_group_3 = document.createElement('div');
        this.$filter_group_3.classList.add('filter_group');
        this.$filter_title_3 = document.createElement('h2');
        this.$filter_title_3.innerHTML = 'Năm ra mắt';
        this.$filter_input_8 = document.createElement('input');
        this.$filter_input_8.type = 'checkbox';
        this.$filter_input_8.name = '2021';
        this.$filter_input_8.id = '2021';
        this.$filter_input_8.value = '2021';
        this.$filter_label_8 = document.createElement('label');
        this.$filter_label_8.innerHTML = '2021';
        this.$br8 = document.createElement('br');
        this.$filter_input_9 = document.createElement('input');
        this.$filter_input_9.type = 'checkbox';
        this.$filter_input_9.name = '2020';
        this.$filter_input_9.id = '2020';
        this.$filter_input_9.value = '2020';
        this.$filter_label_9 = document.createElement('label');
        this.$filter_label_9.innerHTML = '2020';
        this.$br9 = document.createElement('br');
        this.$filter_input_10 = document.createElement('input');
        this.$filter_input_10.type = 'checkbox';
        this.$filter_input_10.name = '2019';
        this.$filter_input_10.id = '2019';
        this.$filter_input_10.value = '2019'
        this.$filter_label_10 = document.createElement('label');
        this.$filter_label_10.innerHTML = '2019';
        this.$br10 = document.createElement('br');
        this.$filter_input_11 = document.createElement('input');
        this.$filter_input_11.type = 'checkbox';
        this.$filter_input_11.name = '2018';
        this.$filter_input_11.id = '2018';
        this.$filter_input_11.value = '2018'
        this.$filter_label_11 = document.createElement('label');
        this.$filter_label_11.innerHTML = '2018';

        this.$product = document.createElement('div');
        this.$product.classList.add('product');

        this.$sneaker1 = document.createElement('div');
        this.$sneaker1.classList.add("product_group");
        this.$sneaker1.addEventListener('click', this.moveToProductDetail);
        this.$img_sneaker_1 = document.createElement('img');
        this.$img_sneaker_1.src = data[0].photo;
        this.$name_sneaker_1 = document.createElement('p');
        this.$name_sneaker_1.innerHTML = 'name ' + data[0].name;
        this.$stock_sneaker_1 = document.createElement('p');
        this.$stock_sneaker_1.innerHTML= 'Stock: ' + data[0].stock;
        this.$price_sneaker_1 =  document.createElement('p');
        this.$price_sneaker_1.innerHTML = 'Price: ' + data[0].price;


        this.$sneaker2 = document.createElement('div');
        this.$sneaker2.classList.add("product_group");
        this.$img_sneaker_2 = document.createElement('img');
        this.$img_sneaker_2.src = data[1].photo;
        this.$name_sneaker_2 = document.createElement('p');
        this.$name_sneaker_2.innerHTML = 'name ' + data[1].name;
        this.$stock_sneaker_2 = document.createElement('p');
        this.$stock_sneaker_2.innerHTML= 'Stock: ' + data[1].stock;
        this.$price_sneaker_2 =  document.createElement('p');
        this.$price_sneaker_2.innerHTML = 'Price: ' + data[1].price;

        this.$sneaker3 = document.createElement('div');
        this.$sneaker3.classList.add("product_group");
        this.$img_sneaker_3 = document.createElement('img');
        this.$img_sneaker_3.src = data[2].photo;
        this.$name_sneaker_3 = document.createElement('p');
        this.$name_sneaker_3.innerHTML = 'name ' + data[2].name;
        this.$stock_sneaker_3 = document.createElement('p');
        this.$stock_sneaker_3.innerHTML= 'Stock: ' + data[2].stock;
        this.$price_sneaker_3 =  document.createElement('p');
        this.$price_sneaker_3.innerHTML = 'Price: ' + data[2].price;

        this.$sneaker4 = document.createElement('div');
        this.$sneaker4.classList.add("product_group");
        this.$img_sneaker_4 = document.createElement('img');
        this.$img_sneaker_4.src = data[3].photo;
        this.$name_sneaker_4 = document.createElement('p');
        this.$name_sneaker_4.innerHTML = 'name ' + data[3].name;
        this.$stock_sneaker_4 = document.createElement('p');
        this.$stock_sneaker_4.innerHTML= 'Stock: ' + data[3].stock;
        this.$price_sneaker_4 =  document.createElement('p');
        this.$price_sneaker_4.innerHTML = 'Price: ' + data[3].price;

        this.$sneaker5 = document.createElement('div');
        this.$sneaker5.classList.add("product_group");
        this.$img_sneaker_5 = document.createElement('img');
        this.$img_sneaker_5.src = data[1].photo;
        this.$name_sneaker_5 = document.createElement('p');
        this.$name_sneaker_5.innerHTML = 'name ' + data[4].name;
        this.$stock_sneaker_5 = document.createElement('p');
        this.$stock_sneaker_5.innerHTML= 'Stock: ' + data[4].stock;
        this.$price_sneaker_5 =  document.createElement('p');
        this.$price_sneaker_5.innerHTML = 'Price: ' + data[4].price;

        this.$sneaker6 = document.createElement('div');
        this.$sneaker6.classList.add("product_group");
        this.$img_sneaker_6 = document.createElement('img');
        this.$img_sneaker_6.src = data[5].photo;
        this.$name_sneaker_6 = document.createElement('p');
        this.$name_sneaker_6.innerHTML = 'name ' + data[5].name;
        this.$stock_sneaker_6 = document.createElement('p');
        this.$stock_sneaker_6.innerHTML= 'Stock: ' + data[5].stock;
        this.$price_sneaker_6 =  document.createElement('p');
        this.$price_sneaker_6.innerHTML = 'Price: ' + data[5].price;

        this.$sneaker7 = document.createElement('div');
        this.$sneaker7.classList.add("product_group");
        this.$img_sneaker_7 = document.createElement('img');
        this.$img_sneaker_7.src = data[6].photo;
        this.$name_sneaker_7 = document.createElement('p');
        this.$name_sneaker_7.innerHTML = 'name ' + data[6].name;
        this.$stock_sneaker_7 = document.createElement('p');
        this.$stock_sneaker_7.innerHTML= 'Stock: ' + data[6].stock;
        this.$price_sneaker_7 =  document.createElement('p');
        this.$price_sneaker_7.innerHTML = 'Price: ' + data[6].price;

        this.$sneaker8 = document.createElement('div');
        this.$sneaker8.classList.add("product_group");
        this.$img_sneaker_8 = document.createElement('img');
        this.$img_sneaker_8.src = data[7].photo;
        this.$name_sneaker_8 = document.createElement('p');
        this.$name_sneaker_8.innerHTML = 'name ' + data[7].name;
        this.$stock_sneaker_8 = document.createElement('p');
        this.$stock_sneaker_8.innerHTML= 'Stock: ' + data[7].stock;
        this.$price_sneaker_8 =  document.createElement('p');
        this.$price_sneaker_8.innerHTML = 'Price: ' + data[7].price;
    };

    moveToProductDetail = () => {
        const product_detail = new ProductDetail();
        setScreen(product_detail);
    };

    render(){
        this.$filter_group_1.appendChild(this.$filter_title_1);
        this.$filter_group_1.appendChild(this.$filter_input_1);
        this.$filter_group_1.appendChild(this.$filter_label_1);
        this.$filter_group_1.appendChild(this.$br1);
        this.$filter_group_1.appendChild(this.$filter_input_2);
        this.$filter_group_1.appendChild(this.$filter_label_2);
        this.$filter_group_1.appendChild(this.$br2);
        this.$filter_group_1.appendChild(this.$filter_input_3);
        this.$filter_group_1.appendChild(this.$filter_label_3);
        this.$filter_group_1.appendChild(this.$br3);
        this.$filter_group_1.appendChild(this.$filter_input_4);
        this.$filter_group_1.appendChild(this.$filter_label_4);
        this.$filter_group_1.appendChild(this.$br4);

        this.$filter_group_2.appendChild(this.$filter_title_2);
        this.$filter_group_2.appendChild(this.$filter_input_5);
        this.$filter_group_2.appendChild(this.$filter_label_5);
        this.$filter_group_2.appendChild(this.$br5);
        this.$filter_group_2.appendChild(this.$filter_input_6);
        this.$filter_group_2.appendChild(this.$filter_label_6);
        this.$filter_group_2.appendChild(this.$br6);
        this.$filter_group_2.appendChild(this.$filter_input_7);
        this.$filter_group_2.appendChild(this.$filter_label_7);
        this.$filter_group_2.appendChild(this.$br7);

        this.$filter_group_3.appendChild(this.$filter_title_3);
        this.$filter_group_3.appendChild(this.$filter_input_8);
        this.$filter_group_3.appendChild(this.$filter_label_8);
        this.$filter_group_3.appendChild(this.$br8);
        this.$filter_group_3.appendChild(this.$filter_input_9);
        this.$filter_group_3.appendChild(this.$filter_label_9);
        this.$filter_group_3.appendChild(this.$br9);
        this.$filter_group_3.appendChild(this.$filter_input_10);
        this.$filter_group_3.appendChild(this.$filter_label_10);
        this.$filter_group_3.appendChild(this.$br10);
        this.$filter_group_3.appendChild(this.$filter_input_11);
        this.$filter_group_3.appendChild(this.$filter_label_11);
       
        this.$filter.appendChild(this.$filter_title);
        this.$filter.appendChild(this.$filter_group_1);
        this.$filter.appendChild(this.$filter_group_2);
        this.$filter.appendChild(this.$filter_group_3);

        this.$topicText.appendChild(this.$topic_title_1);
        this.$topicText.appendChild(this.$topic_title_2);
        this.$topic.appendChild(this.$topicText);

        this.$sneaker1.appendChild(this.$img_sneaker_1);
        this.$sneaker1.appendChild(this.$name_sneaker_1);
        this.$sneaker1.appendChild(this.$stock_sneaker_1);
        this.$sneaker1.appendChild(this.$price_sneaker_1);
        this.$product.appendChild(this.$sneaker1);

        this.$sneaker2.appendChild(this.$img_sneaker_2);
        this.$sneaker2.appendChild(this.$name_sneaker_2);
        this.$sneaker2.appendChild(this.$stock_sneaker_2);
        this.$sneaker2.appendChild(this.$price_sneaker_2);
        this.$product.appendChild(this.$sneaker2);

        this.$sneaker3.appendChild(this.$img_sneaker_3);
        this.$sneaker3.appendChild(this.$name_sneaker_3);
        this.$sneaker3.appendChild(this.$stock_sneaker_3);
        this.$sneaker3.appendChild(this.$price_sneaker_3);
        this.$product.appendChild(this.$sneaker3);

        this.$sneaker4.appendChild(this.$img_sneaker_4);
        this.$sneaker4.appendChild(this.$name_sneaker_4);
        this.$sneaker4.appendChild(this.$stock_sneaker_4);
        this.$sneaker4.appendChild(this.$price_sneaker_4);
        this.$product.appendChild(this.$sneaker4);

        this.$sneaker5.appendChild(this.$img_sneaker_5);
        this.$sneaker5.appendChild(this.$name_sneaker_5);
        this.$sneaker5.appendChild(this.$stock_sneaker_5);
        this.$sneaker5.appendChild(this.$price_sneaker_5);
        this.$product.appendChild(this.$sneaker5);

        this.$sneaker6.appendChild(this.$img_sneaker_6);
        this.$sneaker6.appendChild(this.$name_sneaker_6);
        this.$sneaker6.appendChild(this.$stock_sneaker_6);
        this.$sneaker6.appendChild(this.$price_sneaker_6);
        this.$product.appendChild(this.$sneaker6);

        this.$sneaker6.appendChild(this.$img_sneaker_6);
        this.$sneaker6.appendChild(this.$name_sneaker_6);
        this.$sneaker6.appendChild(this.$stock_sneaker_6);
        this.$sneaker6.appendChild(this.$price_sneaker_6);
        this.$product.appendChild(this.$sneaker6);

        this.$sneaker7.appendChild(this.$img_sneaker_7);
        this.$sneaker7.appendChild(this.$name_sneaker_7);
        this.$sneaker7.appendChild(this.$stock_sneaker_7);
        this.$sneaker7.appendChild(this.$price_sneaker_7);
        this.$product.appendChild(this.$sneaker7);

        this.$sneaker8.appendChild(this.$img_sneaker_8);
        this.$sneaker8.appendChild(this.$name_sneaker_8);
        this.$sneaker8.appendChild(this.$stock_sneaker_8);
        this.$sneaker8.appendChild(this.$price_sneaker_8);
        this.$product.appendChild(this.$sneaker8);
        
        this.$main.appendChild(this.$filter);
        this.$main.appendChild(this.$product);
        this.$main_content.appendChild(this.$topic);
        this.$main_content.appendChild(this.$main);
        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$main_content);
        this.$container.appendChild(this.$footer.render());
        return this.$container;
    }
}
export{Product};