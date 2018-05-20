import request from 'axios'

import { PRODUCTS_SAVED, AJAX_BEGIN, AJAX_END, PRODUCTS_ALL, PRODUCT_FIND ,PRODUCTS_EDITED} from 'actions/actionTypes'

export function saveProduct(productToSave) {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.post('/api/products/save', productToSave )
            .then(function(response){
                dispatch({ type: PRODUCTS_SAVED, saved : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}

export function editProduct(productToEdit) {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.put('/api/products/update', productToEdit )
            .then(function(response){
                dispatch({ type: PRODUCTS_EDITED, saved : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}

export function findProduct(productToFind) {

	//var name = productToFind.get('name');
    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.get('/api/products/find', productToFind )
            .then(function(response){
                dispatch({ type: PRODUCT_FIND})
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}
export function loadAllProducts() {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.get('/api/products/all' )
            .then(function(response){
                dispatch({ type: PRODUCTS_ALL, products : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}