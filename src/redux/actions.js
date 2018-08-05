
import * as types from './actionTypes'

function addProduct(product){
    return {
        type: types.ADD_PRODUCT,
        payload: product
    }
}

function removeProduct(id){
    return {
        type: types.REMOVE_PRODUCT,
        payload: id
    }
}

export default {
    addProduct,
    removeProduct
}
