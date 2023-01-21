import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';


function Widget() {
  return (
    <div className='widget'>
    <div className='widget_top'>
    <div className='widget_header'>
    <h4>LinkdIn News</h4>
    <InfoIcon/>
    </div>
    <div className='widget_body'>
    <ul className='widget_options'>
    <li>
    <h4>Full Stack job search</h4>
    <p>6d ag0 * 4,55 readers</p>
    
    </li>
    <li>
    <h4>React job</h4>
    <p>7d ag0 * 7,55 readers</p>
    
    </li>
    <li>
    <h4>Javascript question</h4>
    <p>10d * 6,77 readers</p>
    
    </li>
    <li>
    <h4>Nodejs</h4>
    <p>44d ag0 * 56 readers</p>
    
    </li>
    <li>
    <h4>Mongo DB</h4>
    <p>70 ago * 90 readers</p>
    
    </li>
    
    </ul>
    </div>
    </div>
    <div className='widget_bottom'>
    <div className='widget_header'>
    <h4>Start leaning today</h4>
    <InfoIcon/>
    
    </div>
    <div className='widget_body'>
    
    
    
    </div>
    
    </div>
    </div>
  )
}

export default Widget