var elem = document.querySelector(".batmen")
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    autoPlay: 2000,
    prevNextButtons: false,
    pageDots: false,
    groupCells: 1
})

var flkty = new Flickity(".batmen", {

})

// sản phẩm hai

var elem = document.querySelector(".omensupermen")
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    autoPlay: 2000,
    prevNextButtons: false,
    pageDots: false,
    groupCells: 1
})

var flkty = new Flickity(".omensupermen", {

})




// sản phẩm chạy 1
var elem = document.querySelector('.zatabay');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 3000,
    prevNextButtons: false,
    pageDots: false,
    groupCells: 1
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.zatabay', {
    // options
});

// sản phẩm chạy 2
var elem = document.querySelector('.baracell');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 3000,
    prevNextButtons: false,
    pageDots: false,
    groupCells: 1
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.baracell', {
    // options
});

// kéo lê chuột
const div = document.querySelector(".long_withpictures")

window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement

    const scrolled = (scrollTop / (scrollHeight -
        clientHeight) * 100)

    div.style.width = `${scrolled}%`;
})

// onclick Event

// const taget = document.getElementById("clickauto").onclick = function () {
//     document.getElementById("informationYame").style.display = 'block';
// };

// document.getElementById("omenBig").onclick = function () {
//     document.getElementById("informationYame").style.display = 'none';
// };

let clickAuto = document.querySelector('#clickauto');
let info = document.querySelector('#informationYame');
// BAR CLICK
let temp = 1;
clickAuto.addEventListener("click", function () {
    if (temp % 2 !== 0) {
        info.style.display = "block";
        temp++;
    } else {
        temp = 1;
        info.style.display = "none";
    }
});

// click search tìm kiếm

let search = document.querySelector(".icon_distance").onclick = function () {
    document.querySelector(".form-control").style.display = "block"
};

let clear = document.querySelector(".clearSearch").onclick = function () {
    document.querySelector(".form-control").style = "display:none"
}


// thông tin khách hàng
let clothing = document.querySelector("#searchClothing");
let formSize = document.querySelector("#forClothing ");

let only = 1;
clothing.addEventListener("click", function () {
    if (only % 2 !== 0) {
        formSize.style.display = "block";
        only++;
    } else {
        only = 1
        formSize.style.display = "none";
    }

});

// giỏ hàng

let trolley = document.querySelector("#trolley");
let carts = document.querySelector(".carts ");

let shop = 1;
trolley.addEventListener("click", function () {
    if (shop % 2 !== 0) {
        carts.style.display = "block";
        shop++;
    } else {
        shop = 1
        carts.style.display = "none";
    }
});