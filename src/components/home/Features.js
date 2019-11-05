import React from 'react'
import styled, {css} from 'styled-components'
import FeatureCard from './FeatureCard'
import Header from './Header'
import { Flex } from 'rebass'
import rectangles from '../../images/background-rectangles.svg'
import githubIcon from '../../images/github-icon.svg'
import networkIcon from '../../images/network-icon.svg'
import npmIcon from '../../images/npm-icon.png'
import managerIcon from '../../images/manager-icon.svg'

const ContainerInner = styled(Flex)`
  # background: linear-gradient(84deg, #fb881799, #ff4b0199, #c1212799, #e02aff99);
  # background-color: ${(props) => props.theme.colors.purpleBlack};
  background-color: ${(props) => props.theme.colors.white};
`

const Container = styled.div`
  background: top / cover no-repeat url(${rectangles});
`

const ContentWrapper = styled(Flex)`
  max-width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    max-width: 1024px;
  }
`

const featureLinkStyles = css`
  font-weight: 500;
  text-decoration: none;
  letter-spacing: .3px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  transition: opacity .5s
  &:hover {
    opacity: .9;
  }
`

const FeatureLink = styled.a`
  ${featureLinkStyles}
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 500px;
  }
`

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const featureTexts = {
  textOne: 'Find help and participate on the cli development',
  textTwo: 'The official docs are a great place to discover new things',
  textThree: 'The archived npm.community forum discussions',
  textFour: 'Are you experiencing problems with npm itself?'
}

const featureTitles = {
  titleOne: 'Github issues',
  titleTwo: 'Docs',
  titleThree: 'Archived Forum',
  titleFour: 'Support'
}

const aStyle = {
  color: '#231f20',
  textDecoration: 'none'
}
const productsLink = `https://www.npmjs.com/products`

const Features = () => {
  return (
    <Container>
      <ContainerInner>
        <ContentWrapper m='auto' py={5} flexDirection='column'>
          <Header />
          <FeaturesContainer>
            <FeatureLink href="http://github.com">
              <FeatureCard
                icon={githubIcon}
                title={featureTitles.titleOne}
                text={featureTexts.textOne}
              />
            </FeatureLink>
            <FeatureLink to={'/cli-commands/npm'}>
              <FeatureCard
                icon={npmIcon}
                title={featureTitles.titleTwo}
                text={featureTexts.textTwo}
              />
            </FeatureLink>
            <FeatureLink href="https://npm.community/categories">
              <FeatureCard
                icon={networkIcon}
                title={featureTitles.titleThree}
                text={featureTexts.textThree}
              />
            </FeatureLink>
            <FeatureLink href={productsLink} style={aStyle} target={'_blank'}>
              <FeatureCard
                icon={npmIcon}
                title={featureTitles.titleFour}
                text={featureTexts.textFour}
              />
            </FeatureLink>
          </FeaturesContainer>
        </ContentWrapper>
      </ContainerInner>
    </Container>
  )
}

export default Features
