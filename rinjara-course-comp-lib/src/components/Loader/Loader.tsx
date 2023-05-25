import React from 'react'
import { Puff } from 'react-loader-spinner'
import { Container } from './Loader.styled'

export const Loader = () => {
  return (
    <Container>
      <Puff
        height='200'
        width='200'
        radius={1}
        color='#002884'
        ariaLabel='puff-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </Container>
  )
}
