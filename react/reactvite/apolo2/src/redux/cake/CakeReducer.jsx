import { BUY_CAKE } from "./CakeConstant";
import { BUY_CHOCO } from "./CakeConstant";

const initialState = {
    numOfcake: 10,
    numOfchoco: 10
}



const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfcake: state.numOfcake - 1
            }
        case BUY_CHOCO:
            return {
                ...state,
                numOfchoco: state.numOfchoco - 1
            }
        default: return state
    }
}

export default CakeReducer