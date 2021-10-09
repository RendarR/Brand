'use strict';
class BasketItem{
    constructor(item){
        this.item = item;
    }
    render(){
        return`
            <div class="drop-cart-products-1">
                <img src="${this.item.productImg}" width="85" height="100" alt="" class="drop-cart-products-1-img">
                <div class="drop-cart-products-1-text">
                    <h3 class="drop-cart-products-1-text-h3">${this.item.productName}</h3>
                    <img src="../src/assets/imgs/stars.png" alt="" class="drop-cart-products-1-text-stars">
                    <div class="drop-cart-products-1-text-totallist">${this.item.amount}
                <span>x</span> $${this.item.productPrice}</div>
                    </div>
                    <div class="drop-cart-products-1-delete"><img src="../src/assets/imgs/x.png" alt=""></div>
                </div>
                
            
            `
    }
    sum(){
        return`
        ${this.item.amount * this.item.productPrice}
        `
    }

}
new class Basket {
     constructor(container = '#basket', url = '/basket.json'){
        this.items = [];
        this.container = document.querySelector(container);
        this.containerItems = document.querySelector('#basket-items');
        this.totalPrice = document.querySelector('#total');
        this.price = document.querySelector('#price');
        this.shown = false;
        this.url = 'https://raw.githubusercontent.com/RendarR/Other/master' + url;
        this.init();
     }
    init() {
        // this.container = document.querySelector('#basket');
        // this.containerItems = document.querySelector('#basket-items');
        this._get(this.url)
            .then(basket => {
                this.items = basket.content;
            })
            .finally(() => {
                this._render();
                this._handleActions();
                this._renderSum();
            })

    }

    _get(url) {
        return fetch(url).then(d => d.json());
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new BasketItem(item).render();
        });
        this.containerItems.innerHTML = htmlStr;
    }
    _renderSum(){
        let sum = 0;
        this.items.forEach(item => {
            sum += +new BasketItem(item).sum();
        });
        this.price.innerHTML = sum + "$";

    }
    _handleActions() {

        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.container.classList.toggle('invisible');
            //this.totalPrice.classList.toggle('invisible');
            this.shown = !this.shown;
        });
        this.container.addEventListener('click', ev => {
            if (ev.target.name === 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
        
    }
    add(item) {
        let find = this.items.find(el => el.productId === item.productId);
        if (find) {
            find.amount++;
        } else {
            this.items.push(item);
        }
        this._render();
    }
    _remove(id) {
        let find = this.items.find(el => el.productId === id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
 };
