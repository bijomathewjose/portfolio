import React from 'react'
import './Navbar.css'
const navbar = ['Home',
    // "Cost for a website", "Hobbies", "Work"
]
const Navbar = () => {
    return (
        <div className="overlap-group">
            <div className="cover">
                {navbar.map((item, index) =>
                    (<div className="text-wrapper" key={index}>{item}</div>)
                )}
            </div>
        </div>
    )
}

export default Navbar