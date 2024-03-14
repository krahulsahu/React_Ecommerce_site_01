import React from 'react'
import './Newcollection.css'
import Items from '../Items/Items'
import new_collections from '../Assets/new_collections'


const Newcollection = () => {
  return (
    <div className="new-collections">
      <h1>New Collection</h1>
      <hr />
      <div className="collectios">
        {new_collections.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Newcollection
