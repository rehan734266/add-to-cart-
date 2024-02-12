import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../Store/Store'
const Header = () => {
  let shoplist=useSelector((store)=>store. ProductSection). shopinglist
  console.log(shoplist);
  return (
    <>
      <nav className="navbar  shadow-sm navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid ">
          <Link to="/Home" className="navbar-brand">
            <img id='logo' src="image.png" alt="....." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home" className="nav-link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Login' className="nav-link active" aria-current="page" href="#">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >
                  admin panel
                </Link>
              </li>



              {/* dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/" className="dropdown-item" >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" >
                      Bata
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" >
                      Nike
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" >
                      Addidas
                    </Link>
                  </li>


                </ul>
              </li>

            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <ul className="navbar-nav me-4 mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link to="/shoping" className="nav-link" >
                    <img className='' style={{width:"24px"}} src="cart.png" alt="" />
                    <span className='bg-danger rounded text-white'>{shoplist.length}</span>
                  </Link>
                </li>
              </ul>
            </form>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header