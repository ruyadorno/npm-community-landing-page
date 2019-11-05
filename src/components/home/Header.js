import React from 'react'
import styled from 'styled-components'
import {Flex} from 'rebass'

const HeroBody = styled(Flex)`
  color: ${(props) => props.theme.colors.purpleBlack};
  flex-direction: column;
  max-width: 620px;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 80px;
`

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.colors.purpleBlack};
  position: relative;
`

const SiteName = styled(Flex)`
  font-size: 45px;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  text-shadow: 3px 2px 4px #abf1e04d;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 70px;
  }
`

const Text = styled.strong`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.purpleBlack};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 18px;
  }
`

const Hero = () => {
  return (
    <HeroBody m={'auto'}>
      <SiteName py={3}>npm.community</SiteName>
      <Text>
        The npm.community forum is now moving into archived mode. We invite
        the community to continue participating in the following places:
      </Text>
    </HeroBody>
  )
}

export default Hero

