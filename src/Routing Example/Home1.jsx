
import React from 'react'

import dish from './data'
import Home1 from './Home1'

const Home1 = ()=>{
    return (
        <div>
            <ul>{

                dish.map((item)=>{
                    return(
                        <li key={item.id}>
                            Name:{item.name} <br/>
                            Price:{item.price} <br/>
                            <button>View Details</button>
                        </li>
                    )
                })

            }</ul>
        </div>
    )
}

export default Home1 