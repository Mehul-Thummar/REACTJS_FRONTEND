import { buy_cake } from "../redux/cake/CakeAction";
import { buy_choco } from "../redux/cake/CakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
    return (
        <div className="flex justify-center items-center h-screen w-screen scale-150">
            <div >
                <h1 className="bg-green-400 text-white text-xl font-bold border-2 border-black px-6 py-3">NumOfCakes = {props.numOfcake}</h1>
                <button onClick={props.buy_cake} className="border-2 px-6 py-2 mt-5 font-bold border-purple-500 ">Action</button>
            </div>
            <div className="ml-10">
                <h1 className="bg-green-400 text-white text-xl font-bold border-2 border-black px-6 py-3">NumOfChoco = {props.numOfchoco}</h1>
                <button onClick={props.buy_choco} className="border-2 px-6 py-2 mt-5 font-bold border-purple-500 ">Action</button>
            </div>

        </div>
    )
}


const mapStateToProp = state => {
    return {
        numOfcake: state.numOfcake,
        numOfchoco: state.numOfchoco
    }
}
const mapDispatchToProp = dispatch => {
    return {
        buy_cake: () => dispatch(buy_cake()),
        buy_choco: () => dispatch(buy_choco())
    }
}



export default connect(mapStateToProp, mapDispatchToProp)(CakeContainer) 
