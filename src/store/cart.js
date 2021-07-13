import produceData from "../mockData/produce.json";

const ADD_TO_CART = 'add item to cart'

export function AddToCart(produceId){
    return{
        type: ADD_TO_CART,
        produceId
    }
}

export default function cartReducer(state={}, action){
    switch(action.type){
        case ADD_TO_CART:
            return{...state,
                [action.produceId]:
                    {id:action.produceId,
                    count:1}
                    }
        default:
            return state
    }
}