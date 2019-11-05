import React from 'react'
import Layout from 'src/components/Layout'
import Features from 'src/components/home/Features'
import SEO from 'src/components/seo'
import DarkBlock from 'src/components/home/DarkBlock'
import {ThemeProvider} from 'styled-components'
import {theme} from 'src/theme'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title='npm community' />
      <Features />
      <DarkBlock />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
