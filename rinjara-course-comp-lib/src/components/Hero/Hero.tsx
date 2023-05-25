import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
interface HeroProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Hero: React.FC<HeroProps> = ({ handleClick }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Genesis Academy
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          paragraph
        >
          Explore our catalog of courses available at Genesis Academy, a tech
          company dedicated to providing top-quality education in the latest
          technologies. Browse our courses and start your learning journey
          today!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button variant='contained' onClick={handleClick}>
            Continue My Course
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
