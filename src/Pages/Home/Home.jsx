import React from 'react'
import "./Home.css";
import Pitch from '../Pitch/Pitch';

const Home
    = () => {
        return (
            <>
                <div className="container" id='home'>
                    <h1 className="hey-i-m-bijo-i">
                        Hey, I’m Bijo.
                        <br />I develop websites.
                    </h1>
                    <p className="p" onClick={() => window.scrollTo(0, window.innerHeight)}>Are you looking for the perfect website ?</p>
                </div>
                <Pitch close={() => window.scrollTo(0, 0)} />
            </>
        )
    }

export default Home


