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
      <div>
        <img src={runnermouth} className='avatar' />
        <p className='good-news'>
          Forsta is a Boise based connected fitness startup building state of the art web sites and apps with
          React and React Native as well as other fun tooling and tech. If you want a fun job
          let us know so we can talk and get to know each other better.
        </p>
        <p className='good-news'>
          jeff@forsta.io
        </p>
      </div>
    </div>)
  }
})
