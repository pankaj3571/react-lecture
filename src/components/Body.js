import RestaurantCard from "./RestaurantCard"
import restaurantList from '../utils/mockData'
import {useState} from 'react'
const Body = () => {
    let [list,setListOfState] = useState(restaurantList)
    return (
        <div>
            <div className="filter">

                <button className="filter-btn" onClick={()=>{
                    const filterList = list.filter((e)=>(Number(e.data.avgRating)>4));
                    // console.log(list);
                    setListOfState(filterList)
                }}>Top Rated filter</button>
              
            </div>
            <div className="restaurant-list">

                {list.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>

    );
};

export default Body;