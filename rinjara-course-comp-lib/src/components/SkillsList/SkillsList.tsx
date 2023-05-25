import React, { Fragment } from 'react'
import {
  CardActions,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ExpandMore } from './SkillsList.styled'

type SkillsListProps = {
  isExpanded: boolean
  handleExpandClick: () => void
  skills?: string[]
}

export const SkillsList: React.FC<SkillsListProps> = ({
  isExpanded,
  handleExpandClick,
  skills
}) => {
  return (
    <Fragment>
      <CardActions disableSpacing style={{ padding: 0 }}>
        <Typography variant='h6' color='text.secondary'>
          Skills
        </Typography>
        <ExpandMore
          expand={isExpanded ? 1 : 0}
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label='more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={isExpanded} timeout='auto' unmountOnExit>
        <CardContent>
          <List>
            {skills?.map((skill: string) => (
              <ListItem key={skill}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Fragment>
  )
}
