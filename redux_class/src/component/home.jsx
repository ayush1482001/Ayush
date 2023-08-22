import { useSelector } from 'react-redux';


const Home=()=>{
    const allData= useSelector((store)=>store);
    console.log("all data is",allData);
    return<>
    <div className="home">
    <h1>this is my Home page</h1>
    </div>
    </>
}
export default Home;