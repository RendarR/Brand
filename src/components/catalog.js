'use strict'
class CatalogItem{
    constructor(item){
        this.item = item;
    }
    
    render() {
        return `
        <div class="item">
            <a href="#" class="item_">
                <div class="item__">
                    <div class="img_item">
                    <div class="open_text">
                            <div class="gen_add_to_card">
                                <img src="../src/assets/imgs/1287.png" alt="">
                                <p class="p_add_to_card">Add to card</p>
                            </div>
                        </div>
                        <img src="${this.item.productImg}" alt="">
                    </div>
                    <div class="footer_item">
                        <h1 class="h1_item">${this.item.productName}</h1>
                        <h2 class="h2_item">$${this.item.productPrice}</h2>
                    </div>
                </div>
            </a>
        </div>`
    }
}

new class Catalog {
    constructor(basket, container = '#catalog', url = '/catalog.json') {
        this.container = document.querySelector(container);
        this.items = [];
        this.basket = basket;
        this.url = 'https://raw.githubusercontent.com/RendarR/Other/master/' + url;
        this.init();
    }
    init() {
        this._get(this.url)
            .then(arr => {
                this.items = arr;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json());
    }

    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new CatalogItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'add') {
                let dataset = ev.target.dataset;
                this.basket.add(this._createNewItem(dataset));
            }
        })
    }

    _createNewItem(dataset) {
        return {
            productId: dataset.id,
            productName: dataset.name,
            productImg: dataset.img,
            productPrice: +dataset.price,
            amount: 1
        }
    }
}
