let menuList = document.getElementById("menuList");
menuList.style.maxHeight ="0px";

function togglemenu(){
    if(menuList.style.maxHeight =="0px"){
        menuList.style.maxHeight ="200px";
    }
    else{
        menuList.style.maxHeight ="0px";
    }
    

};

// swiper
var swiper = new Swiper(".swiper",{
    loop:true,
    centeredSlides:'true',
    slidesPerView:3,
    spaceBetween:20,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
