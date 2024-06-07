import { BUY_CAKE } from "./CakeConstant";

const initialstate = {
    numOfcake: 10
}

const CakeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfcake: state.numOfcake - 1
            }
        default: return state
    }
}

export default CakeReducer