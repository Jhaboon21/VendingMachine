import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>Hello! I am a Vending Machine!</h1>
            <h3>What would you like to eat?</h3>
            <Link to='/soda'>Soda?</Link>
            <Link to='/chips'>Chips?</Link>
            <Link to='/candy'>Candy?</Link>
        </div>
    )
}
export default Home;