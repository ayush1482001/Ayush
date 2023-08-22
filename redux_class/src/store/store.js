import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../reducer/cartreducer";
import detailsreducer from "../reducer/detailsreducer";
import footerreducer from "../reducer/footerreducer";


// store is nothing but just a js object { ... }


const combineReducer = {
  details: detailsreducer,
  cart: cartreducer,
  footer: footerreducer,
   
};

// now we can access the data by (store.category.men),(store.details.hotelDetails).............

const store = configureStore({
  reducer: combineReducer,
});

// store.subscribe(()=>console.log("hello success",store.getState()));
export default store;
