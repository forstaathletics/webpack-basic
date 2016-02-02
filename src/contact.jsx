import React from 'react'
import { Link } from 'react-router'

// Load an image
let runnermouth = require('assets/img/runnermouth.jpg')

export default React.createClass({
  render: () => {
    return (<div>
    <Link to='/'>Home</Link>
    <h1>Contact</h1>
    <h4>This image is less than 5K in size and is embedded as a base64 encoding</h4>
    <img src={runnermouth} />
    </div>)
  }
})
