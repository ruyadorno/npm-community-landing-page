import React from 'react'
import Navbar from './Navbar'
import {Flex, Box} from 'rebass'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      <Flex w={1}>
        <Box width={1}>{children}</Box>
      </Flex>
    </React.Fragment>
  )
}

export default Layout
