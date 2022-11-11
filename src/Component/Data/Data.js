import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../../public/api/cars.json";
import img from '../../public/images/s60_recharge.jpg';

const Data = () => {
    const [state,setState] = useState("");
    const {id} = useParams();
  return (
    <div>
        <input type="text" placeholder="Search car type...." onChange={e => setState(e.target.value)}/>
        {!state ? <div>
            {data.map(ele => {
                return (
                <div key={ele.id}>
                    <div>{ele.modelName}</div>
                    <div><img src={img} /></div>
                    <div><img src={ele.imageUrl} /></div>
                    <div>{ele.modelName}</div>
                    <div>{ele.modelType}</div>
                    <Link to={`/learn/${id}`}><button>Learn about car</button></Link>
                    <Link to='/shop/:id'><button>Car Shop</button></Link>
                    <hr/>
                </div>
            )
        })}</div>:
        <div>{data.filter(ele => ele.bodyType== state).map(ele => {
        return(
            <div key={ele.id}>
            <div>{ele.modelName}</div>
            <div><img src={img} /></div>
            <div>{ele.modelName}</div>
            <div>{ele.modelType}</div>
            <hr/>
          </div>
        )
      })}</div>
      }
    </div>
  )
}

export default Data