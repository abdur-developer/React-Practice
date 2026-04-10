import React from 'react';
import "./Watch.css"
import PropTypes from 'prop-types';

const Watch = ({watch, add, remove, addedToCart}) => {
    const {name, img, price} = watch;
    // console.log(id, addedToCart);
    return (
        <div class="watch-card">
            <div class="card-image">
                <img src={img}/>
            </div>
            <div class="card-details">
                <h2 class="watch-name">{name}</h2>
                <div class="card-price">
                    <span class="price">${price}</span>
                    {addedToCart ?
                        <button onClick={() => remove(watch)} class="buy-btn">Remove Cart</button> :
                        <button onClick={() => add(watch)} class="buy-btn">Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};
Watch.propTypes = {
    watch: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    addedToCart: PropTypes.bool.isRequired,
}
export default Watch;