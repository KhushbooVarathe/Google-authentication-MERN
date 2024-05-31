import React from 'react'
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import SyncLoader from "react-spinners/SyncLoader";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
};
const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("blue");

    return (
        <div >
            <button className='btn btn-info ' onClick={() => setLoading(!loading)}>Toggle Loader</button>
            {/* <input className='form-control' value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}
            <div className='text-center'>
                <ClipLoader
                    color={color}
                    loading={loading}
                    //   override={override}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
<br/>
                <SyncLoader
                    color={color}
                    loading={loading}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader" />



                    <ClimbingBoxLoader
                    color={color}
                    loading={loading}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader" 
                    />
            </div>

        </div>
    );
}

export default Loader