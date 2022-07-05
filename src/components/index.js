import Basket from './basket';
import Catalog from './catalog';
export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket)
}
