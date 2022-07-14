
///////////////////////////
//// open in close function toggle

let shopBtn = document.querySelector('.shopBtn');
let closeBtn = document.querySelector('.close-btn');
let buysProdcts = document.querySelector('.buys-prodcts');
let products = document.querySelector('.products');
let totalPrice = document.querySelector('.total-price h2');
let product_length = document.querySelector('.navbar span');


// let counterNumber = 1;


function open_close(el) {
    el.classList.toggle('active');
}

shopBtn.addEventListener('click', () => {
    open_close(buysProdcts);
});
closeBtn.addEventListener('click', () => {
    open_close(buysProdcts);
});


////////////////////////////////////////
////////////////////////////////////////







////////////////////////////////////////
////////////////////////////////////////


window.addEventListener('click',(e) => {
    if (e.target.className === 'buy-btn') {
        let card = e.target.closest('.card');

        let product_info = {
            id: card.id,
            img_src: card.querySelector('.product-img img').src,
            title: card.querySelector('.product-title h4').innerText,
            price: card.querySelector('.product-title .price').innerText,
        }

        // if (e.target.innerText === 'Added') return;

        let children = products.children;
        for (const iterator of children) {
            if (iterator.id === product_info.id) return;
        }

        let product_html = `
            <div class="box" id="${product_info.id}">
                <div class="product-img">
                    <img src="${product_info.img_src}" alt="">
                </div>
                <div class="info-product">
                    <div class="price-product">
                        <h3>${product_info.title}</h3>
                        <h4 class="box-price">${product_info.price}</h4>
                    </div>
                    <div class="counter-box">
                        <span class="minus">-</span>
                        <span class="counter">1</span>
                        <span class="plus">+</span>
                    </div>
                </div>
                <div class="remove-btn">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;

        e.target.innerText = 'Added';
        e.target.style.background = 'red';
        e.target.style.color = '#fff';
        
        
        products.insertAdjacentHTML('beforeend', product_html);
        

        calcPrice();
        
        


        let removeBtn = document.querySelectorAll('.remove-btn');



        removeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                let id = btn.parentElement.id;
                let card = document.getElementById(id);
                let button = card.querySelector('.buy-btn');
                
                btn.parentElement.remove();
                button.innerText = 'Buy';
                button.style.background = '#0982f3';
                calcPrice();

                if (products.children.length === 0) {
                    totalPrice.innerHTML = 'Total : $0';
                    document.querySelector('.total-box').style.display = 'none';
                }
            });
        });



    }
    

});





////////////////////////////////////////
////////////////////////////////////////






////////////////////////////////////////
////////////////////////////////////////


products.addEventListener('click', (e) => {
    let product = e.target.closest('.box');
    if(!product) return;
    if (e.target.className === 'minus') {
        let pr = +product.querySelector('.counter').innerHTML;
        pr -= 1;

        if (pr < 1) {
            pr = 1;
        }
        product.querySelector('.counter').innerHTML = pr;
        calcPrice();
    }
    if (e.target.className === 'plus') {
        let pr = +product.querySelector('.counter').innerHTML;
        pr += 1;
        product.querySelector('.counter').innerHTML = pr;
        calcPrice();
    }



    
    calcPrice();
});

////////////////////////////////////////
////////////////////////////////////////



////////////////////////////////////////
////////////////////////////////////////


function calcPrice() {
    let box = document.querySelectorAll('.box')
    


    let totalPriceCounter = 0;

    box.forEach(el => {
        let amountEl = el.querySelector('.counter').innerHTML;
        let priceEl = el.querySelector('.box-price').innerHTML;
        let currentPrice = +amountEl * +priceEl.slice(1);
        totalPriceCounter += currentPrice;
        totalPrice.innerHTML ='$' + totalPriceCounter;        
    });

    if (products.children.length != 0) {
        document.querySelector('.total-box').style.display = 'block';
    }

    prduct_lenght_f(products);
}




////////////////////////////////////////
////////////////////////////////////////











function prduct_lenght_f(product) {
    if (products.children.length == '0') {
        product_length.style.display = 'none';
    }else{
        product_length.style.display = 'grid';
        product_length.innerHTML = product.children.length;
    }
}

prduct_lenght_f(products);
