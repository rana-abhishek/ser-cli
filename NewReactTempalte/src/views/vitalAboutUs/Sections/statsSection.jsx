import React from 'react'

function StatsSection(props) {
    return (
        <div style={{color:"rgb(94, 71, 44)"}}>
            <h4 className={props.classes.title}>Stats</h4>
                          <ul className={props.classes.listUnstyled}>
                            <li>
                              <b>60</b> Products
                            </li>
                            <li>
                              <b>4</b> Collections
                            </li>
                            <li>
                              <b>331</b> Influencers
                            </li>
                            <li>
                              <b>1.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
        </div>
    )
}

export default StatsSection
