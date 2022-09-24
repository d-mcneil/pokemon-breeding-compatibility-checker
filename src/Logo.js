import React from "react";
import eggsImage from './togepi.png'

const Logo = () => {
    return (
        <>
            <div className="col-12">
                <h1 className="page-title py-3 px-2 mx-5" >Pokémon Breeding Compatibility Checker</h1>
            </div>
            <img src={eggsImage} alt="logo" className="col-auto my-3"></img>
        </>
    )
}

export default Logo