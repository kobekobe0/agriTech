import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { ImPriceTags } from 'react-icons/im'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import './marketplace.css'
function Marketplace() {
    const [dealer, setDealer] = useState([
        {
            name: 'Juan Dela Cruz',
            location: 'Manila',
            rating: 3,
            grade: 75,
        },
        {
            name: 'Pedro Pancho',
            location: 'Benguet',
            rating: 5,
            grade: 95,
        },
        {
            name: 'Marco Rosales',
            location: 'Bulacan',
            rating: 4,
            grade: 80,
        },
        {
            name: 'John Doe',
            location: 'Bataan',
            rating: 3,
            grade: 73,
        },
        {
            name: 'Ariel Sy',
            location: 'Valenzuela',
            rating: 2,
            grade: 53,
        },
        {
            name: 'Steven Cruz',
            location: 'Laguna',
            rating: 4,
            grade: 81,
        },
    ])
    return (
        <div className="marketPeople">
            <div className="stats">
                <div className="statsNumber">
                    <div className="cropGrade">
                        <BiUpArrow
                            style={{ fill: 'rgb(26,174,159)' }}
                            size={40}
                        />
                        <div>
                            <h2>3.0%</h2>
                            <h4>Your crop grade</h4>
                        </div>
                    </div>
                    <div className="suggestedPrice">
                        <RiMoneyDollarBoxFill
                            style={{ fill: 'rgb(26,174,159)' }}
                            size={40}
                        />
                        <div>
                            <h2>P43/kilo</h2>
                            <h4>Suggested price</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="dealerTitle">Dealers for you</h2>
            <hr />

            {dealer.map((deal) => (
                <div className="marketItem" key={deal.name}>
                    <div className="upperMarket">
                        <div className="upperLeft">
                            <h2>{deal.name}</h2>

                            <div className="locRate">
                                <h3>{deal.location}</h3>
                                <ReactStars
                                    count={5}
                                    value={deal.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className="upperRight">
                            {deal.grade < 80 ? (
                                <BiDownArrow
                                    size={30}
                                    style={{ fill: 'red' }}
                                />
                            ) : (
                                <BiUpArrow
                                    size={30}
                                    style={{ fill: 'green' }}
                                />
                            )}
                            <div className="grade">
                                <h2>{deal.grade}%</h2>
                                <h3>Crop Grade</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lowerMarket">
                        <button>
                            <ImPriceTags
                                size={15}
                                style={{ fill: 'white', marginRight: '5px' }}
                            />
                            Negotiate
                        </button>
                        <button>
                            <FiMail />
                            Message
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Marketplace
