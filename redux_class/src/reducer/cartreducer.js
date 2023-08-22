

const initialState ={name:"username is Ayush",
category: "",
cartStatus:false,
cartLength:0,
};
// missing data
// * type
// * payload to be added

// const action={
//     type:"name",
//     payload:"hello"
// }

//state is current state and initial state is defalult vbalue foe state
 const CartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "cartreducer:name":
            return{
                ...initialState, //we cant do like cart.name="ayush" directly
                name:""//new data(payload) to be added
            };
        case "category":
            return{
                ...initialState,
                category:"" //new data(payload) to be added
            };
        case "cartStatus":
            return{
                ...initialState,
                cartStatus:true //new data(payload) to be added
            };
        case "cartLength":
            return{
                ...initialState,
                cartLength:5   //new data(payload) to be added
            };
        default:
            return ({...initialState});
    }
}
export default CartReducer;