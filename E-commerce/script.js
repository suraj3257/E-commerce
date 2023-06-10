const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Shirt",
        price: 1199,
        colors: [
            {
                code: "black",
                img: "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/black_denim_shirt_for_men_base_24_11_2022_700x933.jpg",
            },
            {
                code: "lightgray",
                img: "https://images.meesho.com/images/products/48548662/5ibji_512.webp",
            },
            {
                code: "red",
                img: "https://tiimg.tistatic.com/fp/1/007/908/trendy-and-stylish-breathable-perfect-fit-soft-men-s-formal-red-shirts-060.jpg",
            },
            {
                code: "darkblue",
                img: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/x/s/u/xxl-latest-zara-ramraj-human-being-unique-stylish-high-quality-original-imagewgwjbad8yfa.jpeg?q=70",
            },
        ],
    },
    {
        id: 2,
        title: "Shoes",
        price: 1499,
        colors: [
            {
                code: "lightgray",
                img: "https://www.shutterstock.com/image-photo/puebla-mexico-december-12-2019-260nw-1586196940.jpg",
            },
            {
                code: "red",
                img: "https://www.nicekicks.com/files/2016/04/kd-7-challenge-red-lifestyle-6.jpg",
            },
            {
                code: "gray",
                img: "https://sneakerbardetroit.com/wp-content/uploads/2023/01/Air-Jordan-2-Cool-Grey-FB8871-041-4-1068x762.jpg",
            },
            {
                code: "green",
                img: "https://m.media-amazon.com/images/I/811SEyCieGL._UL1500_.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 2999,
        colors: [
            {
                code: "black",
                img: "https://imagescdn.planetfashion.in/img/app/product/5/598752-5577169.jpg?auto=format&w=494.40000000000003",
            },
            {
                code: "red",
                img: "https://stylesatlife.com/wp-content/uploads/2019/11/Red-cropped-blazer-men.jpg.webp",
            },
            {
                code: "blue",
                img: "https://imagescdn.planetfashion.in/img/app/product/7/738403-8258497.jpg?auto=format",
            },
            {
                code: "gray",
                img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0023_1_7d1d4aea-a71a-4174-aa8d-a9149bbfd140_grande.jpg?v=1678695280",
            },
        ],
    },
    {
        id: 4,
        title: "Jeans",
        price: 1299,
        colors: [
            {
                code: "black",
                img: "https://usplworld-static.s3.ap-south-1.amazonaws.com/static/img/wrogn/products/product_detail/WMJN2329/2.jpeg"
            },
            {
                code: "white",
                img: "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2234305/2018/2/23/11519383167302-ether-Men-White-Regular-Fit-Mid-Rise-Clean-Look-Stretchable-Cropped-Jeans-8401519383167069-1.jpg",
            },
            {
                code: "blue",
                img: "https://assets.ajio.com/medias/sys_master/root/20220317/4ExL/62323f25aeb26921afded401/-473Wx593H-469157895-bluegold-MODEL.jpg",
            },
            {
                code: "gray",
                img: "https://imagescdn.planetfashion.in/img/app/product/7/767527-8819678.jpg?auto=formathttps://m.media-amazon.com/images/I/811SEyCieGL._UL1500_.jpg",
            },
        ],
    },
    {
        id: 5,
        title: "Model Top",
        price: 999,
        colors: [
            {
                code: "gray",
                img: "https://assets.ajio.com/medias/sys_master/root/hfd/h1c/14950775259166/-473Wx593H-461059303-grey-MODEL.jpg",
            },
            {
                code: "red",
                img: "https://assets.ajio.com/medias/sys_master/root/20230602/lEAV/64797d7642f9e729d715aa46/-473Wx593H-462239580-red-MODEL.jpg",
            },
            {
                code: "green",
                img: "https://images.meesho.com/images/products/126342810/48bsu_512.webp",
            },
            {
                code: "black",
                img: "https://cdn.shopify.com/s/files/1/0399/0231/4646/products/SFTOPS4895-1_c7d811ba-516f-4ca1-bce7-77a29b3149d1.jpg?v=1667998577",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rs" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});