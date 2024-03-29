import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ a1, a }) => {
    return (
        // <>
        <Link to={"/Select/"+a1.id} className="text-dark text-decoration-none">

            <div className="card" style={{ width: "18rem" }}>
                <img src={a1.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{a1.title}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        ${a1.price + " "+a}
                    </Link>
                </div>
            </div>
        </Link>


        // </>
    )
}

export default Card