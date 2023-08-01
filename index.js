alert("ROM ROM BHAIYO")

const home_btn = document.getElementById("home")
const new_btn = document.getElementById("new")
const coat_wear = document.getElementById("coat")
const tops_wear = document.getElementById("tops");
const sweater_wear = document.getElementById("sweater")
const knite_wear = document.getElementById("knitewear")
const fansy_wear = document.getElementById("fansy")
const wedding_wear = document.getElementById("wedding")
const cloth = document.querySelector(".cloth_type");
const mybtn = document.querySelectorAll("button");
const search_box = document.getElementById("searchme")
const like = document.getElementById("like")
const cart = document.getElementById("cart");

cart.addEventListener("click",()=>{
    alert("Your item is saved in CART")
})

home_btn.addEventListener("click",()=>{
    cloth.innerHTML="HOME";
})
new_btn.addEventListener("click",()=>{
    cloth.innerHTML="NEW IN";
})
coat_wear.addEventListener("click",()=>{
    cloth.innerHTML="COAT";
})
tops_wear.addEventListener("click",()=>{
    cloth.innerHTML="TOPS";
})
sweater_wear.addEventListener("click",()=>{
    cloth.innerHTML="SWEATER";
})
knite_wear.addEventListener("click",()=>{
    cloth.innerHTML="KNITEWEAR";
})
fansy_wear.addEventListener("click",()=>{
    cloth.innerHTML="FANSY";
})
wedding_wear.addEventListener("click",()=>{
    cloth.innerHTML="WEDDING";
})
tops_wear.addEventListener("change",()=>{
})

const etick = () =>{
    localStorage.setItem("key1",search_box.value);
}

mybtn[0].onclick=changepost0;

function changepost0(){
    document.getElementById('product1').src='product1.jpg'
    document.getElementById('product2').src='product2.png'
    document.getElementById('product3').src='product3.png'
    document.getElementById('product4').src='product4.png'
    document.getElementById('product5').src='product11.jpg'
    document.getElementById('product6').src='product6.png'
    document.getElementById('product7').src='product8.jpg'
    document.getElementById('product8').src='product10.jpg'
}

mybtn[1].onclick=changepost1;

function changepost1(){
    document.getElementById('product1').src='product25.jpg'
    document.getElementById('product2').src='product26.jpg'
    document.getElementById('product3').src='product27.jpg'
    document.getElementById('product4').src='product28.jpg'
    document.getElementById('product5').src='product29.jpg'
    document.getElementById('product6').src='product30.jpg'
    document.getElementById('product7').src='product31.jpg'
    document.getElementById('product8').src='product32.jpg'
}

mybtn[2].onclick=changepost2;

function changepost2(){
    document.getElementById('product1').src='product22.jpg'
    document.getElementById('product2').src='product8.jpg'
    document.getElementById('product3').src='product23.jpg'
    document.getElementById('product4').src='product9.jpg'
    document.getElementById('product5').src='product24.jpg'
    document.getElementById('product6').src='product2.png'
    document.getElementById('product7').src='product5.jpg'
    document.getElementById('product8').src='product1.jpg'
}

like.addEventListener("click",()=>{
    like.style.filter= "invert(40%) sepia(38%) saturate(3867%) hue-rotate(335deg) brightness(99%) contrast(106%)";
})

like.addEventListener("mouseover",()=>{
    like.style.filter= "invert(55%) sepia(13%) saturate(15%) hue-rotate(323deg) brightness(89%) contrast(87%)";
})
