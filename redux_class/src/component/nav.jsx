import {useDispatch }from 'react-redux';


const Nav=()=>{
    const dispatch=useDispatch();
    const actionNameReducer={
        type:"cartreducer:name",
        payload:"DonaldTrump"

    };

    dispatch(actionNameReducer);
    return<>
    <div className="nav">
    <h1>this is my navigation</h1>
    </div>
    </>
}
export default Nav;