import React from 'react'
import './widgets.scss'
import InfoIcon from '@material-ui/icons/Info'
import FiberManalRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManalRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('what is new?','clone linkedIn page.')}
            {newsArticle('How to learn react?','check this page.')}
          
          
        </div>
    )
}

export default Widgets
