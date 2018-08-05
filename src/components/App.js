import React from 'react'
// dependencies
import PropTypes from 'prop-types'

// components
import Header from './Header'
import Content from './Content'

function App({children}) {
  return (
    <div>
      <Header />
      <Content body={children} />
    </div>
  )
}


App.propTypes = {
  children: PropTypes.object.isRequired
}


export default App