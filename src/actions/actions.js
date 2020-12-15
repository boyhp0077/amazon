import { toast } from 'react-toastify';

const addNotify = (text, id) => {
    if (toast.isActive(id)) {
        toast.dismiss(id)
    }
    toast.dark(text, {
        closeOnClick: true,
        draggable: true,
        toastId: id
    });
}
const loginUser = (user, stateValue) => {
    return { ...stateValue, user: user }
}
const addToCart = (product, stateValue) => {
    const updatedCart = [...stateValue.cart]

    const updateIndex = updatedCart.findIndex(x => x.id === +product.id)

    if (updateIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 })
        let NotiText = `Added!! 🛒🎈   ${product.title} `
        addNotify(NotiText, product.id)
    } else {
        const updatedProudct = { ...updatedCart[updateIndex] }
        updatedProudct.quantity++;
        updatedCart[updateIndex] = updatedProudct;
        let NotiText = `Added!! 🛒✨  ${updatedProudct.title} ${updatedProudct.quantity}`
        addNotify(NotiText, updatedProudct.id)

    }

    return { ...stateValue, cart: updatedCart }
}
const removeFromCart = (productId, stateValue) => {

    let updatedCart = [...stateValue.cart]
    let NotiText = `Removed! 🗑🗑🗑  ${updatedCart.find(x => x.id = productId)?.title} `;
    updatedCart = updatedCart.filter(x => x.id !== parseInt(productId))
    addNotify(NotiText, productId)
    return { ...stateValue, cart: updatedCart }
}
const updateCart = (productId, quantity, stateValue) => {
    const updatedCart = [...stateValue.cart]

    const updateProduct = updatedCart.find(x => x.id === +productId)

    updateProduct.quantity = quantity

    return { ...stateValue, cart: updatedCart }
}
const emptyCart = (stateValue) => {
    return { ...stateValue, cart: [] }
}
export { addNotify, updateCart, removeFromCart, addToCart, loginUser, emptyCart }