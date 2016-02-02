import React from 'react'
import { Link } from 'react-router'

// Load an image
let runnerbg = require('assets/img/runnerbg.jpg')

export default React.createClass({
  render: () => {
    return (<div>
    <Link to='/'>Home</Link>
    <h1>About</h1>

    <h4>This image is greater than 5K in size and is loaded from the server</h4>
    <img src={runnerbg} />
    </div>)
  }
})
