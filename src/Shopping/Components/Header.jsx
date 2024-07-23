import React from 'react'

const Header = () => {
  return (
    <>
       <div className="nav-section">
        <div className="logo">

            <h1>E-MART</h1>

        </div>
        <div className="input">
            <input className='Search' type="text" placeholder='Search' />

        </div>
        <div className="category">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>

        </div>
        <div className="cart">
            <h2>Signin/Signup</h2>
            <div className="cart1">
            <h2>Cart</h2>


            </div>
            


        </div>
       </div>
    </>
  )
}

export default Header