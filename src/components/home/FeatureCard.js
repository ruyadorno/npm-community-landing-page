import React from 'react'
import styled from 'styled-components'
import {Flex, Image, Text} from 'rebass'

const Card = styled(Flex)`
  background-color: #f2f2f2ab;
  box-shadow: 5px 5px 1px 1px ${(props) => props.theme.colors.red};
  border-radius: 2px;
`

const Desc = styled.p`
  font-size: 16px;
  line-height: 22px;
`

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  text-shadow: 1px 2px 2px #f061df6e;
`

const Icon = styled(Image)`
  width: 64px;
  flex-shrink: 0;
`

const FeatureCard = ({icon, text, title}) => {
  return (
    <Card alignItems='center' flexDirection={['column', 'row']} p={4} m={4}>
      <Icon src={icon} />
      <Flex flexDirection='column' pl={[0, 4]} pt={2}>
        <Title textAlign={['center', 'left']}>{title}</Title>
        <Desc>{text}</Desc>
      </Flex>
    </Card>
  )
}

export default FeatureCard
