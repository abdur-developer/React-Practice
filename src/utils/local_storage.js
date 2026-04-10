const key = "cart";
const getStorageCarts = () => {
    const carts = localStorage.getItem(key);
    if(carts){
        return JSON.parse(carts);
    }
    return [];
}

const addToLSCart = (id) => {
    const carts = getStorageCarts();
    carts.push(id);
    localStorage.setItem(key, JSON.stringify(carts));
}

const removeLSCart = (id) => {
    const carts = getStorageCarts();
    const newCarts = carts.filter(idx => id != idx);
    localStorage.setItem(key, JSON.stringify(newCarts));
}

export {getStorageCarts, addToLSCart, removeLSCart}