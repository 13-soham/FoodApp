import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';

const Body = () => {
    const [Items, setItems] = useState([]);
    const [Index, setIndex] = useState(2);
    const Max_page = 7;
    let API_URL = `https://picsum.photos/v2/list?page=${Index + 1}&limit=32`;

    // const getData = () => {
    //     // console.log("aaagya data");
    //     // normal promise
    //     fetch(API_URL)
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.warn(err.message));
    // }

    // const getData2 = async () => {
    //     // using async/await
    //     try {
    //         let response = await fetch(API_URL);
    //         let data = await response.json();
    //         console.log(data);
    //     }
    //     catch (err) {
    //         console.warn(err.message);
    //     }
    // }

    const getData3 = async () => {
        // using axios
        try {
            let val = await axios.get(API_URL);
            setItems(val.data);
            // console.log(val.data);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        if (Index < 1 || Index > Max_page) return;
        getData3();
    }, [Index]);

    let container = <h2 className='absolute top-[50%] left-[45%] text-5xl text-white font-extrabold font-[monument]'>Loading...</h2>;

    if (Items.length > 0) {
        container = Items.map((elem, idx) => {
            return <Card key={idx} elem={elem} />
        });
    }
    return (
        <div className='py-5'>
            <div className='mt-5 grid grid-cols-4 gap-4 max-h-127 overflow-auto p-4 scrollbar-hide'>
                {container}
            </div>
            <div className='flex items-center justify-center gap-4'>

                {/* prev */}
                <button disabled={Index === 1} onClick={() => {
                    if (Index > 1) setIndex(Index - 1);
                }} className={`buttonProp mt-3 active:scale-95 transition-transform-all duration-100 ${Index === 1 ? "opacity-30 cursor-not-allowed" : ""
                    }`}>prev</button>

                <h3 className='text-white mt-3'>page {Index}</h3>

                {/* next */}
                <button disabled={Index === Max_page} onClick={() => {
                    setIndex(Index + 1);
                }} className={`buttonProp mt-3 active:scale-95 transition-transform-all duration-100 ${Index === Max_page ? "opacity-30 cursor-not-allowed" : ""}`}>next</button>
            </div>
        </div>
    )
}

export default Body;