import { Footer } from "./footer.js";
import { Header } from "./header.js";
let master_data = [ 
    { name:'Nike Air Force 1 Low Supreme White', id: 15, type: 'Giày', price: 4000000, photo:'../image/SHO1.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'../image/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'../image/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'../image/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'../image/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Mid Chicago', id: 1, type: 'Áo', price: 10000000, photo:'../image/JK1.jpeg', url: '#', rating: 3, stock: 200, madein: 'Trung Quốc', year: 2015},
    { name:'adidas Yeezy Boost 350 V2', id: 2, type: 'Áo', price: 20000000, photo:'../image/JK2.jpeg', url: '#', rating: 2, stock: 100, madein: 'Trung Quốc', year: 2021},
    { name:'Jordan 3 Retro Pine Green', id: 3, type: 'Áo', price: 4500000, photo:'../image/JK3.jpeg', url: '#', rating: 5, stock: 1000, madein: 'Trung Quốc', year: 2021},
    { name:'Yeezy x Gap Hoodie Blue', id: 4, type: 'Áo', price: 2300000, photo:'../image/JK4.jpeg', url: '#', rating: 1, stock: 800, madein: 'Việt Nam', year: 2021},
    { name:'Yeezy x Gap Hoodie Brown', id: 5, type: 'Áo', price: 2400000, photo:'../image/JK5.jpeg', url: '#', rating: 2, stock: 700, madein: 'Trung Quốc', year: 2019},
    { name:'Túi Michale Kors', id: 26, type: 'Túi', price: 1700000, photo:'../image/BAG2.jpeg', url: '#', rating: 1, stock: 1466, madein: 'Lào', year: 2020},
    { name:'Túi Guccii', id: 27, type: 'Túi', price: 1900000, photo:'../image/BAG3.jpeg', url: '#', rating: 3, stock: 1220, madein: 'Việt Nam', year: 2019},
    { name:'Túi Charles Keith', id: 28, type: 'Túi', price: 2000000, photo:'../image/BAG4.jpeg', url: '#', rating: 1, stock: 1474, madein: 'Việt Nam', year: 2019},
    { name:'Túi Guccii Fall Collection', id: 29, type: 'Túi', price: 1850000, photo:'../image/BAG5.jpeg', url: '#', rating: 1, stock: 535, madein: 'Việt Nam', year: 2021},
    { name:'Túi LV', id: 30, type: 'Túi', price: 1750000, photo:'../image/BAG1.jpeg', url: '#', rating: 1, stock: 1654, madein: 'Bangladesh', year: 2021},
    { name:'G-Stock New Edition', id: 21, type: 'Đồng hồ', price: 2900000, photo:'../image/GS1.jpeg', url: '#', rating: 1, stock: 350, madein: 'Trung Quốc', year: 2016},
    { name:'G-Stock 2019 Breakthough', id: 22, type: 'Đồng hồ', price: 2000000, photo:'../image/GS2.jpeg', url: '#', rating: 1, stock: 1462, madein: 'Việt Nam', year: 2020},
    { name:'G-Stock Air', id: 23, type: 'Đồng hồ', price: 3000000, photo:'../image/GS3.jpeg', url: '#', rating: 4, stock: 322, madein: 'Trung Quốc', year: 2021},
    { name:'G-Stock Fall Collection', id: 24, type: 'Đồng hồ', price: 2000000, photo:'../image/GS4.jpeg', url: '#', rating: 5, stock: 269, madein: 'Trung Quốc', year: 2020},
    { name:'G-Stock 2000', id: 25, type: 'Đồng hồ', price: 1500000, photo:'../image/GS5.jpeg', url: '#', rating: 5, stock: 1583, madein: 'Việt Nam', year: 2020},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'../image/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020},
    { name:'Adidas OZWEEGO TR', id: 34, type: 'Giày', price: 2000000, photo:'../image/SHO6.jpeg', url: '#', rating: 5, stock: 496, madein: 'Campuchia', year: 2020},
    { name:'Adidas Energyfalcon', id: 35, type: 'Giày', price: 1850000, photo:'../image/SHO7.jpeg', url: '#', rating: 1, stock: 1096, madein: 'Lào', year: 2021},
    { name:'Adidas Kaptir', id: 36, type: 'Giày', price: 1750000, photo:'../image/SHO8.jpeg', url: '#', rating: 5, stock: 42, madein: 'Bangladesh', year: 2019},
    { name:'Adidas Continental 80', id: 37, type: 'Giày', price: 1650000, photo:'../image/SHO9.jpeg', url: '#', rating: 4, stock: 1081, madein: 'Việt Nam', year: 2019},
    { name:'Adidas AlphaEdge 4D', id: 38, type: 'Giày', price: 1350000, photo:'../image/SHO10.jpeg', url: '#', rating: 2, stock: 860, madein: 'Việt Nam', year: 2019}
];
class Home {
    $header;
    $footer;
    $home;
    $advertisement;
    $slogan;
    $mainContent;

    $mostSneakers;
    $product;
    $title1;
    $information1;
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
    $sneaker5;
    $img_sneaker_5;
    $name_sneaker_5;
    $stock_sneaker_5;
    $price_sneaker_5;

    $trendingApparels;
    $product1;
    $title2;
    $information2;
    $apparel1;
    $img_apparel_1;
    $name_apparel_1;
    $stock_apparel_1;
    $price_apparel_1;
    $apparel2;
    $img_apparel_2;
    $name_apparel_2;
    $stock_apparel_2;
    $price_apparel_2;
    $apparel3;
    $img_apparel_3;
    $name_apparel_3;
    $stock_apparel_3;
    $price_apparel_3;
    $apparel4;
    $img_apparel_4;
    $name_apparel_4;
    $stock_apparel_4;
    $price_apparel_4;

    $mostViewedBag;
    $title3;
    $information3;
    $bag1;
    $bag2;
    $bag3;
    $bag4;
    $bag5;

    $topTradingWatches;
    $title4;
    $information4;
    $watch1;
    $watch2;
    $watch3;
    $watch4;
    $watch5;

    constructor(){
        this.$home = document.createElement('div');
        this.$home.classList.add('home');

        this.$header = new Header();
        this.$footer = new Footer();
        this.$advertisement = document.createElement('div');
        this.$advertisement.classList.add('advertisement');

        this.$slogan = document.createElement('span');
        this.$slogan.classList.add('slogan');
        this.$slogan.innerHTML = "WHAT's NOW & NEXT";

        this.$mainContent = document.createElement('div');
        this.$mainContent.classList.add('main_content');


        this.$mostSneakers = document.createElement('div');
        this.$mostSneakers.classList.add('most_sneakers');
        this.$information1 = document.createElement('div');
        this.$information1.classList.add('main_title');
        this.$title1 = document.createElement('span');
        this.$title1.classList.add('title');
        this.$title1.innerHTML = 'Most Popular Sneakers';

        this.$product = document.createElement('div');
        this.$product.classList.add('product');

        this.$sneaker1 = document.createElement('div');
        this.$sneaker1.classList.add("product_group");
        this.$img_sneaker_1 = document.createElement('img');
        this.$img_sneaker_1.src = master_data[0].photo;
        this.$name_sneaker_1 =  document.createElement('p');
        this.$name_sneaker_1.innerHTML = 'name ' + master_data[0].name;
        this.$stock_sneaker_1 = document.createElement('p');
        this.$stock_sneaker_1.innerHTML= 'Stock: ' + master_data[0].stock;
        this.$price_sneaker_1 =  document.createElement('p');
        this.$price_sneaker_1.innerHTML = 'Price: ' + master_data[0].price;
        
        this.$sneaker2 = document.createElement('div');
        this.$sneaker2.classList.add("product_group");
        this.$img_sneaker_2 = document.createElement('img');
        this.$img_sneaker_2.src = master_data[1].photo;
        this.$name_sneaker_2 =  document.createElement('p');
        this.$name_sneaker_2.innerHTML = 'name ' + master_data[1].name;
        this.$stock_sneaker_2 = document.createElement('p');
        this.$stock_sneaker_2.innerHTML= 'Stock: ' + master_data[1].stock;
        this.$price_sneaker_2 =  document.createElement('p');
        this.$price_sneaker_2.innerHTML = 'Price: ' + master_data[1].price;

        this.$sneaker3 = document.createElement('div');
        this.$sneaker3.classList.add("product_group");
        this.$img_sneaker_3 = document.createElement('img');
        this.$img_sneaker_3.src = master_data[2].photo;
        this.$name_sneaker_3 =  document.createElement('p');
        this.$name_sneaker_3.innerHTML = 'name ' + master_data[2].name;
        this.$stock_sneaker_3 = document.createElement('p');
        this.$stock_sneaker_3.innerHTML= 'Stock: ' + master_data[2].stock;
        this.$price_sneaker_3 =  document.createElement('p');
        this.$price_sneaker_3.innerHTML = 'Price: ' + master_data[2].price;

        this.$sneaker5 = document.createElement('div');
        this.$sneaker5.classList.add("product_group");
        this.$img_sneaker_5 = document.createElement('img');
        this.$img_sneaker_5.src = master_data[4].photo;
        this.$name_sneaker_5 =  document.createElement('p');
        this.$name_sneaker_5.innerHTML = 'name ' + master_data[4].name;
        this.$stock_sneaker_5 = document.createElement('p');
        this.$stock_sneaker_5.innerHTML= 'Stock: ' + master_data[4].stock;
        this.$price_sneaker_5 =  document.createElement('p');
        this.$price_sneaker_5.innerHTML = 'Price: ' + master_data[4].price;

        this.$trendingApparels = document.createElement('div');
        this.$trendingApparels.classList.add('trending_apparels');
        this.$information2 = document.createElement('div');
        this.$information2.classList.add('main_title');
        this.$title2 = document.createElement('span');
        this.$title2.classList.add('title');
        this.$title2.innerHTML = 'Trending Apparels';

        this.$product1 = document.createElement('div');
        this.$product1.classList.add('product');

        this.$apparel1 = document.createElement('div');
        this.$apparel1.classList.add("product_group");
        this.$img_apparel_1 = document.createElement('img');
        this.$img_apparel_1.src = master_data[5].photo;
        this.$name_apparel_1 =  document.createElement('p');
        this.$name_apparel_1.innerHTML = 'name ' + master_data[5].name;
        this.$stock_apparel_1 = document.createElement('p');
        this.$stock_apparel_1.innerHTML= 'Stock: ' + master_data[5].stock;
        this.$price_apparel_1 =  document.createElement('p');
        this.$price_apparel_1.innerHTML = 'Price: ' + master_data[5].price;

        this.$apparel2 = document.createElement('div');
        this.$apparel2.classList.add("product_group");
        this.$img_apparel_2 = document.createElement('img');
        this.$img_apparel_2.src = master_data[5].photo;
        this.$name_apparel_2 =  document.createElement('p');
        this.$name_apparel_2.innerHTML = 'name ' + master_data[6].name;
        this.$stock_apparel_2 = document.createElement('p');
        this.$stock_apparel_2.innerHTML= 'Stock: ' + master_data[6].stock;
        this.$price_apparel_2 =  document.createElement('p');
        this.$price_apparel_2.innerHTML = 'Price: ' + master_data[6].price;

        this.$apparel3 = document.createElement('div');
        this.$apparel3.classList.add("product_group");
        this.$img_apparel_3 = document.createElement('img');
        this.$img_apparel_3.src = master_data[5].photo;
        this.$name_apparel_3 =  document.createElement('p');
        this.$name_apparel_3.innerHTML = 'name ' + master_data[7].name;
        this.$stock_apparel_3 = document.createElement('p');
        this.$stock_apparel_3.innerHTML= 'Stock: ' + master_data[7].stock;
        this.$price_apparel_3 =  document.createElement('p');
        this.$price_apparel_3.innerHTML = 'Price: ' + master_data[7].price;

        this.$apparel4 = document.createElement('div');
        this.$apparel4.classList.add("product_group");
        this.$img_apparel_4 = document.createElement('img');
        this.$img_apparel_4.src = master_data[5].photo;
        this.$name_apparel_4 =  document.createElement('p');
        this.$name_apparel_4.innerHTML = 'name ' + master_data[8].name;
        this.$stock_apparel_4 = document.createElement('p');
        this.$stock_apparel_4.innerHTML= 'Stock: ' + master_data[8].stock;
        this.$price_apparel_4 =  document.createElement('p');
        this.$price_apparel_4.innerHTML = 'Price: ' + master_data[8].price;
    }
    handleLogout = () =>{
        firebase.auth().signOut();
    };
    moveToProduct = () =>{
        const product = new Product();
        setScreen(product);
    }
    render(){
        this.$information1.appendChild(this.$title1);
        this.$mostSneakers.appendChild(this.$information1);
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

        this.$sneaker5.appendChild(this.$img_sneaker_5);
        this.$sneaker5.appendChild(this.$name_sneaker_5);
        this.$sneaker5.appendChild(this.$stock_sneaker_5);
        this.$sneaker5.appendChild(this.$price_sneaker_5);
        this.$product.appendChild(this.$sneaker5);

        this.$mostSneakers.appendChild(this.$product);

        this.$information2.appendChild(this.$title2);
        this.$trendingApparels.appendChild(this.$information2);

        this.$apparel1.appendChild(this.$img_apparel_1);
        this.$apparel1.appendChild(this.$name_apparel_1);
        this.$apparel1.appendChild(this.$stock_apparel_1);
        this.$apparel1.appendChild(this.$price_apparel_1);
        this.$product1.appendChild(this.$apparel1);

        this.$apparel2.appendChild(this.$img_apparel_2);
        this.$apparel2.appendChild(this.$name_apparel_2);
        this.$apparel2.appendChild(this.$stock_apparel_2);
        this.$apparel2.appendChild(this.$price_apparel_2);
        this.$product1.appendChild(this.$apparel2);

        this.$apparel3.appendChild(this.$img_apparel_3);
        this.$apparel3.appendChild(this.$name_apparel_3);
        this.$apparel3.appendChild(this.$stock_apparel_3);
        this.$apparel3.appendChild(this.$price_apparel_3);
        this.$product1.appendChild(this.$apparel3);

        this.$apparel4.appendChild(this.$img_apparel_4);
        this.$apparel4.appendChild(this.$name_apparel_4);
        this.$apparel4.appendChild(this.$stock_apparel_4);
        this.$apparel4.appendChild(this.$price_apparel_4);
        this.$product1.appendChild(this.$apparel4);
        this.$trendingApparels.appendChild(this.$product1);

        this.$mainContent.appendChild(this.$mostSneakers);
        this.$mainContent.appendChild(this.$trendingApparels);

        this.$advertisement.appendChild(this.$slogan);
        this.$home.appendChild(this.$header.render());
        this.$home.appendChild(this.$advertisement);
        this.$home.appendChild(this.$mainContent);
        this.$home.appendChild(this.$footer.render());
        return this.$home;
    }
}

export { Home };