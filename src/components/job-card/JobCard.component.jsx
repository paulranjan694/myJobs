import React from 'react'
import './JobCard.style.scss'
function JobCard({title, description, location, modalOpenHandler}) {
    return (
        <div className="job__details">
            <div className="job__title">{title}</div>
            <div className="job__desc">
            {description}
            </div>
            <div className="job__others">
                <div className="job__location">
                <i class="fas fa-map-marker-alt"></i> {location}</div>
                <div className="view__applications" onClick={modalOpenHandler}>View Applications</div>
            </div>
       </div>
    )
}

export default JobCard
