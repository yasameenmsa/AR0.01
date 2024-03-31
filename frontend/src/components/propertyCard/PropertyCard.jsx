import React from 'react'
import classes from './propertyCard.module.css'
import { FaBed, FaSquareFull } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import person from '../../assets/person.jpg'

const PropertyCard = ({ property }) => {
  const ownerProfileImg = property?.currentOwner?.profileImg

    return (
        <div key={property._id} className={classes.property}>
            <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
                <img src={`https://ar0-01.onrender.com/images/${property?.img}`} alt="" />
            </Link>
            <div className={classes.details}>
                <div className={classes.priceAndOwner}>
                    <span className={classes.price}>$ {property.price}</span>
                    <img src={ownerProfileImg ? `https://ar0-01.onrender.com/images/${ownerProfileImg}` : person} className={classes.owner} />
                </div>
                <div className={classes.moreDetails}>
                    <span>{property.beds} <FaBed className={classes.icon} /></span>
                    <span>{property.sqmeters} square meters<FaSquareFull className={classes.icon} /></span>
                </div>
                <div className={classes.desc}>
                    {property.desc}
                </div>
            </div>
        </div>
    )
}

export default PropertyCard