import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: () => {
    return (<div>
    <Link to='/'>Home</Link>
    <h1>About</h1>
    </div>)
  }
})
