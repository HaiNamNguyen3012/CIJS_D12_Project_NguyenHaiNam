import { Footer } from "./footer.js";
import { Header } from "./header.js";

let data = [
    { name:'Nike Air Force 1 Low White', id: 15, type: 'Giày', price: 4000000, photo:'../image/tải xuống.jfif', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020}
];

class ProductDetail{
    $container;
    $header;
    $footer;
    $details;
    $left1;
    $name;
    $information;
    $authentic;
    $condition;
    $image1;
    $right1;
    $size;
    $selectProducts;
    $option1;
    $option2;
    $option3;
    $option4;
    $option5;
    $option6;
    $option7;
    $option8;
    $option9;
    $option10;
    $option11;
    $option12;
    $option13;
    $buy;
    $button1;
    $sizeAndPrice1;
    $size1;
    $price1;
    $sell;
    $button2;
    $sizeAndPrice2;
    $size2;
    $price2;

    $productInformation;
    $title;
    $detail;
    $detail_group1;
    $detail_group2;
    $detail_group3;
    $detail_group4;
    $detail_group5;
    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('product_detail');

        this.$header = new Header();
        this.$footer = new Footer();

        this.$details = document.createElement('div');
        this.$details.classList.add('details');

        this.$left1 = document.createElement('div');
        this.$left1.classList.add('left');
        
        this.$name = document.createElement('h1');
        this.$name.innerHTML = 'Product Name ' + data[0].name;

        this.$information = document.createElement('div');
        this.$information.classList.add('information');

        this.$authentic = document.createElement('span');
        this.$authentic.innerHTML = '100% Authentic';

        this.$condition = document.createElement('span');
        this.$condition.innerHTML = 'Condition: New';

        this.$image1 = document.createElement('img');
        this.$image1.src = data[0].photo;

        this.$right1 = document.createElement('div');
        this.$right1.classList.add('right');

        this.$size = document.createElement('div');
        this.$size.classList.add('size');
        this.$selectProducts = document.createElement('select');
        this.$selectProducts.name = 'products';
        this.$selectProducts.id = 'products';

        this.$option1 = document.createElement('option');
        this.$option1.value = '';
        this.$option1.innerHTML = 'Chọn size giày của bạn';
        this.$option2 = document.createElement('option');
        this.$option2.value = '30';
        this.$option2.innerHTML = '30';
        this.$option3 = document.createElement('option');
        this.$option3.value = '31';
        this.$option3.innerHTML = '31';
        this.$option4 = document.createElement('option');
        this.$option4.value = '32';
        this.$option4.innerHTML = '32';
        this.$option5 = document.createElement('option');
        this.$option5.value = '33';
        this.$option5.innerHTML = '33';
        this.$option6 = document.createElement('option');
        this.$option6.value = '34';
        this.$option6.innerHTML = '34';
        this.$option7 = document.createElement('option');
        this.$option7.value = '35';
        this.$option7.innerHTML = '35';
        this.$option8 = document.createElement('option');
        this.$option8.value = '36';
        this.$option8.innerHTML = '36';
        this.$option9 = document.createElement('option');
        this.$option9.value = '37';
        this.$option9.innerHTML = '37';
        this.$option10 = document.createElement('option');
        this.$option10.value = '38';
        this.$option10.innerHTML = '38';
        this.$option11 = document.createElement('option');
        this.$option11.value = '39';
        this.$option11.innerHTML = '39';
        this.$option12 = document.createElement('option');
        this.$option12.value = '40';
        this.$option12.innerHTML = '40';
        this.$option13 = document.createElement('option');
        this.$option13.value = '41';
        this.$option13.innerHTML = '41';

        this.$buy = document.createElement('div');
        this.$buy.classList.add('buy');
        this.$button1 = document.createElement('button');
        this.$button1.type = 'submit';
        this.$button1.innerHTML = 'Buy or Bid';
        this.$sizeAndPrice1 = document.createElement('div');
        this.$sizeAndPrice1.classList.add('sizeAndPrice1');
        this.$size1 = document.createElement('p');
        this.$size1.innerHTML = 'Size: ';
        this.$price1 = document.createElement('h2');
        this.$price1.innerHTML = '200$';

        this.$sell = document.createElement('div');
        this.$sell.classList.add('sell');
        this.$button2 = document.createElement('button');
        this.$button2.type = 'submit';
        this.$button2.innerHTML = 'Sell or Ask';
        this.$sizeAndPrice2 = document.createElement('div');
        this.$sizeAndPrice2.classList.add('sizeAndPrice2');
        this.$size2 = document.createElement('p');
        this.$size2.innerHTML = 'Size: ';
        this.$price2 = document.createElement('h2');
        this.$price2.innerHTML = '200$';

        this.$productInformation = document.createElement('div');
        this.$productInformation.classList.add('product_information');
        this.$title = document.createElement('span');
        this.$title.innerHTML = 'Product Details';
        this.$detail = document.createElement('div');
        this.$detail.classList.add('detail');
        this.$detail_group1 = document.createElement('span');
        this.$detail_group1.innerHTML = 'Style: ' + data[0].name;
        this.$detail_group2 = document.createElement('span');
        this.$detail_group2.innerHTML = 'Type: ' + data[0].type;
        this.$detail_group3 = document.createElement('span');
        this.$detail_group3.innerHTML = 'Retail: ' + data[0].price;
        this.$detail_group4 = document.createElement('span');
        this.$detail_group4.innerHTML = 'Release year: ' + data[0].name;
        this.$detail_group5 = document.createElement('span');
        this.$detail_group5.innerHTML = 'Product Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, culpa!';
    }

    render(){
        this.$information.appendChild(this.$authentic);
        this.$information.appendChild(this.$condition);
        this.$left1.appendChild(this.$name);
        this.$left1.appendChild(this.$information);
        this.$left1.appendChild(this.$image1);
        this.$details.appendChild(this.$left1);

        this.$selectProducts.appendChild(this.$option1);
        this.$selectProducts.appendChild(this.$option2);
        this.$selectProducts.appendChild(this.$option3);
        this.$selectProducts.appendChild(this.$option4);
        this.$selectProducts.appendChild(this.$option5);
        this.$selectProducts.appendChild(this.$option6);
        this.$selectProducts.appendChild(this.$option7);
        this.$selectProducts.appendChild(this.$option8);
        this.$selectProducts.appendChild(this.$option9);
        this.$selectProducts.appendChild(this.$option10);
        this.$selectProducts.appendChild(this.$option11);
        this.$selectProducts.appendChild(this.$option12);
        this.$selectProducts.appendChild(this.$option13);

        this.$sizeAndPrice1.appendChild(this.$size1);
        this.$sizeAndPrice1.appendChild(this.$price1);
        this.$buy.appendChild(this.$button1);
        this.$buy.appendChild(this.$sizeAndPrice1);
        
        this.$sizeAndPrice2.appendChild(this.$size2);
        this.$sizeAndPrice2.appendChild(this.$price2);
        this.$sell.appendChild(this.$button2);
        this.$sell.appendChild(this.$sizeAndPrice2);

        this.$size.appendChild(this.$selectProducts);
        this.$size.appendChild(this.$buy);
        this.$size.appendChild(this.$sell);

        this.$right1.appendChild(this.$size);

        this.$details.appendChild(this.$left1);
        this.$details.appendChild(this.$right1);

        this.$detail.appendChild(this.$detail_group1);
        this.$detail.appendChild(this.$detail_group2);
        this.$detail.appendChild(this.$detail_group3);
        this.$detail.appendChild(this.$detail_group4);
        this.$detail.appendChild(this.$detail_group5);

        this.$productInformation.appendChild(this.$title);
        this.$productInformation.appendChild(this.$detail);

        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$details);
        this.$container.appendChild(this.$productInformation);
        this.$container.appendChild(this.$footer.render());
        return this.$container;
    }
}
export {ProductDetail};