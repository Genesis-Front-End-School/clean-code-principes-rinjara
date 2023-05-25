import * as React from 'react'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { StyledComponent } from '@emotion/styled'

interface ExpandMoreProps extends IconButtonProps {
  expand: number
}

export const ExpandMore: StyledComponent<ExpandMoreProps> = styled(
  (props: ExpandMoreProps) => {
    const { ...other } = props
    return <IconButton {...other} />
  }
)(({ theme, expand }) => ({
  transform: `rotate(${expand ? '180' : '0'}deg)`,
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))
