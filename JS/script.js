const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    const scrollFromTop = document.querySelector('html').scrollTop;
    header.style.opacity = scrollFromTop > 0 ? '0.5' : '1.0';
});




document.querySelector('.trigger').onmousedown = function() {
    open()
};

function open() {
    document.querySelector('.menu__list').classList.toggle('show');
    image = document.getElementById('close-trigger');
    image.src = './img/arrow-close.png';
}



document.querySelector('.arrow').onclick = function() {
    openArr()
};

function openArr() {
    document.querySelector('.about__blocks').classList.toggle('shows');
    image = document.getElementById('about-arrow');
    image.src = './img/arrow-rotate.png';
}

document.querySelector('.arrow-second').onclick = function() {
    openArro()
};

function openArro() {
    document.querySelector('.service__blocks').classList.toggle('shoows');
    image = document.getElementById('service-arrow');
    image.src = './img/arrow-rotate.png';
}



document.querySelector('.arrow-six').onclick = function() {
    openTeam()
};

function openTeam() {
    document.querySelector('.team__blocks').classList.toggle('show-member');
    image = document.getElementById('team-arrow');
    image.src = './img/arrow-rotate.png';
}



document.querySelector('.arrow-fourth').onclick = function() {
    openBlog()
};

function openBlog() {
    document.querySelector('.blog__blocks').classList.toggle('shows-blog');
    image = document.getElementById('blog-arrow');
    image.src = './img/arrow-rotate.png';
}


document.querySelector(".button-service").onmousedown = function(){
    this.style.backgroundColor ="#00897B";
    this.style.border = "4px solid #00897B";
};
document.querySelector(".button-service").onmouseup = function(){
    this.style.backgroundColor ="inherit";
    this.style.border = "4px solid white";
};


document.querySelector(".button-hire").onmousedown = function(){
    this.style.backgroundColor ="inherit";
    this.style.border = "4px solid white";
};

document.querySelector(".button-hire").onmouseup = function(){
    this.style.backgroundColor ="#00897B";
    this.style.border = "4px solid  #00897B";
};


document.getElementById("service-block").onmouseover = function(){
    service = document.getElementById('first');
    service.style.color = 'white';
    text = document.getElementById('text-first');
    text.style.color = "white";
    button = document.getElementById('read-first');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-first');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block").onmouseout = function(){
    service = document.getElementById('first');
    service.style.color = 'black';
    text = document.getElementById('text-first');
    text.style.color = "black";
    button = document.getElementById('read-first');
    button.style.color = "black";
    image = document.getElementById('image-first');
    image.src = './img/smartphone-black 1.png';
    button.style.border = "2px solid black";
    this.style.backgroundColor = "white";
};

document.getElementById("service-block_second").onmouseover = function(){
    service = document.getElementById('second');
    service.style.color = 'white';
    text = document.getElementById('text-second');
    text.style.color = "white";
    button = document.getElementById('read-second');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-second');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block_second").onmouseout = function(){
    service = document.getElementById('second');
    service.style.color = 'black';
    text = document.getElementById('text-second');
    text.style.color = "black";
    button = document.getElementById('read-second');
    button.style.color = "black";
    image = document.getElementById('image-second');
    image.src = './img/smartphone-black 1.png';
    button.style.border = "2px solid black";
    this.style.backgroundColor = "white";
};


document.getElementById("service-block_third").onmouseover = function(){
    service = document.getElementById('third');
    service.style.color = 'white';
    text = document.getElementById('text-third');
    text.style.color = "white";
    button = document.getElementById('read-third');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-third');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block_third").onmouseout = function(){
    service = document.getElementById('third');
    service.style.color = 'black';
    text = document.getElementById('text-third');
    text.style.color = "black";
    button = document.getElementById('read-third');
    button.style.color = "black";
    button.style.border = "2px solid black";
    image = document.getElementById('image-third');
    image.src = './img/smartphone-black 1.png';
    this.style.backgroundColor = "#FFFFFF";
};

document.getElementById("service-block_fourth").onmouseover = function(){
    service = document.getElementById('fourth');
    service.style.color = 'white';
    text = document.getElementById('text-fourth');
    text.style.color = "white";
    button = document.getElementById('read-fourth');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-fourth');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block_fourth").onmouseout = function(){
    service = document.getElementById('fourth');
    service.style.color = 'black';
    text = document.getElementById('text-fourth');
    text.style.color = "black";
    button = document.getElementById('read-fourth');
    button.style.color = "black";
    button.style.border = "2px solid black";
    image = document.getElementById('image-fourth');
    image.src = './img/smartphone-black 1.png';
    this.style.backgroundColor = "#FFFFFF";
};

document.getElementById("service-block_five").onmouseover = function(){
    service = document.getElementById('five');
    service.style.color = 'white';
    text = document.getElementById('text-five');
    text.style.color = "white";
    button = document.getElementById('read-five');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-five');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block_five").onmouseout = function(){
    service = document.getElementById('five');
    service.style.color = 'black';
    text = document.getElementById('text-five');
    text.style.color = "black";
    button = document.getElementById('read-five');
    button.style.color = "black";
    button.style.border = "2px solid black";
    image = document.getElementById('image-five');
    image.src = './img/smartphone-black 1.png';
    this.style.backgroundColor = "#FFFFFF";
};

document.getElementById("service-block_six").onmouseover = function(){
    service = document.getElementById('six');
    service.style.color = 'white';
    text = document.getElementById('text-six');
    text.style.color = "white";
    button = document.getElementById('read-six');
    button.style.color = "white";
    button.style.border = "2px solid white";
    image = document.getElementById('image-six');
    image.src = './img/smartphone-white 1.png';
    this.style.backgroundColor = "#00897B";
};

document.getElementById("service-block_six").onmouseout = function(){
    service = document.getElementById('six');
    service.style.color = 'black';
    text = document.getElementById('text-six');
    text.style.color = "black";
    button = document.getElementById('read-six');
    button.style.color = "black";
    button.style.border = "2px solid black";
    image = document.getElementById('image-six');
    image.src = './img/smartphone-black 1.png';
    this.style.backgroundColor = "#FFFFFF";
};

document.getElementById("price-block").onmouseover = function(){
    this.style.boxShadow = "0px 3px 25px rgba(0, 0, 0, 0.35)";
};

document.getElementById("price-block").onmouseout = function(){
    this.style.boxShadow = "0px 0px 0px";
};

document.getElementById("price-block-second").onmouseover = function(){
    this.style.boxShadow = "0px 3px 25px rgba(0, 0, 0, 0.35)";
};

document.getElementById("price-block-second").onmouseout = function(){
    this.style.boxShadow = "0px 0px 0px";
};

document.getElementById("price-block-third").onmouseover = function(){
    this.style.boxShadow = "0px 3px 25px rgba(0, 0, 0, 0.35)";
};

document.getElementById("price-block-third").onmouseout = function(){
    this.style.boxShadow = "0px 0px 0px";
};


document.getElementById("order-first").onmousedown = function(){
    this.style.backgroundColor ="#00897B";
    this.style.border = "2px solid #00897B";
    text = document.getElementById('order__text-first');
    text.style.color = "white";
    
};

document.getElementById("order-first").onmouseup = function(){
    this.style.backgroundColor ="white";
    this.style.border = "2px solid black";
    text = document.getElementById('order__text-first');
    text.style.color = "black";
};

document.getElementById("order-second").onmousedown = function(){
    this.style.backgroundColor ="#00897B";
    this.style.border = "2px solid #00897B";
    text = document.getElementById('order__text-second');
    text.style.color = "white";
    
};

document.getElementById("order-second").onmouseup = function(){
    this.style.backgroundColor ="white";
    this.style.border = "2px solid black";
    text = document.getElementById('order__text-second');
    text.style.color = "black";
};

document.getElementById("order-third").onmousedown = function(){
    this.style.backgroundColor ="#00897B";
    this.style.border = "2px solid #00897B";
    text = document.getElementById('order__text-third');
    text.style.color = "white";
    
};

document.getElementById("order-third").onmouseup = function(){
    this.style.backgroundColor ="white";
    this.style.border = "2px solid black";
    text = document.getElementById('order__text-third');
    text.style.color = "black";
};


document.querySelector('.arrow-five').onclick = function() {
    openPrice()
};

function openPrice() {
    document.querySelector('.price__blocks').classList.toggle('price-show');
    image = document.getElementById('five-arrow');
    image.src = './img/arrow-rotate.png';
}


document.querySelector('.arrow-seven').onclick = function() {
    openContact()
};

function openContact() {
    document.querySelector('.contact__blocks').classList.toggle('contact-show');
    image = document.getElementById('contact-arrow');
    image.src = './img/arrow-rotwhite.png';
    document.querySelector('.content__forms').classList.toggle('contact-show');
    document.querySelector('.contact__button').classList.toggle('contact-show');
}

document.querySelector('.contact__button').onclick = function() {
    openForm()
};

function openForm() {
    n1=document.getElementById('name-first');
        if (n1.value=="") {contact__button.style.backgroundColor="red";} else {n1.style.backgroundColor="white";}
        n2=document.getElementById('name-second');
        if (n2.value=="") {n2.style.backgroundColor='red';} else {n2.style.backgroundColor="white";}
        n3=document.getElementById('name-third');
        if (n3.value=="") {n3.style.backgroundColor='red';} else {n3.style.backgroundColor="white";}
}

document.querySelector('.arrow-new').onclick = function() {
    openBlockPrice()
};

function openBlockPrice() {
    document.querySelector('.block__main').classList.toggle('block__main-show');
    image = document.getElementById('new-arrow');
    image.src = './img/arrow-rotwhite.png';
}


document.querySelector('.arrow-new_second').onclick = function() {
    openBlockPricee()
};

function openBlockPricee() {
    document.getElementById('main-second').classList.toggle('block__main-shows');
    image = document.getElementById('second__new-arrow');
    image.src = './img/arrow-rotwhite.png';
}

document.querySelector('.arrow-new_third').onclick = function() {
    openBlockPriceThird()
};

function openBlockPriceThird() {
    document.getElementById('main-third').classList.toggle('block__main-shows');
    image = document.getElementById('third__new-arrow');
    image.src = './img/arrow-rotwhite.png';
}

document.getElementById('button-service').onclick = function() {
    openNew()
};

function openNew() {
    document.getElementById('service-block_fourth').classList.toggle('four-show');
    document.getElementById('service-block_five').classList.toggle('four-show');
    document.getElementById('service-block_six').classList.toggle('four-show');
}