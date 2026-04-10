import React, { useEffect, useState } from 'react';
import Watch from './Watch';
import './Watches.css';
import { addToLSCart, removeLSCart, getStorageCarts } from '../../utils/local_storage';

const Watches = () => {
    const [watches, setWatches] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("watches.json")
        .then(res => res.json())
        .then(data => setWatches(data));
    }, []);

    useEffect(()=>{
        if(watches.length){
            const cartIds = getStorageCarts();
            const newCarts = [];
            //array এর জন্য for of
            //object এর জন্য for in
            for(const id of cartIds){
                const find = watches.find(watch => watch.id == id);
                if(find) newCarts.push(find);
                console.log("find : ", find);
            }
            setCarts(newCarts);
        }
    }, [watches]);

    const addToCart = (watch) => {
        setCarts([...carts, watch]);
        addToLSCart(watch.id);
    }

    const removeFromCart = (watch) => {
        setCarts(carts.filter(watchX => watchX != watch));
        removeLSCart(watch.id);
    }
    return (
        <>
            <div className='carts'>
                {/* {carts.map(watch => <img src={watch.img}/>)} */}
                {carts.map(watch => <span>{watch.name}</span>)}
                {/* {carts.map(watch => <Watch key={watch.id} watch={watch}></Watch>)} */}
            </div>
            <div className='watches'>
                {watches.map(watch => <Watch 
                key={watch.id} 
                watch={watch} 
                addedToCart={carts.includes(watch)}
                add={addToCart} 
                remove={removeFromCart}></Watch>)}
            </div>
        </>
    );
};

export default Watches;