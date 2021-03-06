import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'
import AmbassadorData from '../../../data/ambassador'

const useStyles = makeStyles(theme => ({
  containerContent: {
    color: theme.palette.primary.main,

    '&:hover > .icon': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      transition: '1s',
    },
    '&:hover > div > h5': {
      color: theme.palette.primary.main,
      transition: '1s',
    },
  },
  borderPink: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  content: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
  },
}))

function Ambassador() {
  const classes = useStyles()
  return (
    <div className='text-center py-10'>
      <Fade bottom cascade>
        <Typography variant='h4' className='pt-15 text-white'>
          Become Our Campus Ambassador
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-20'
          alt='---------------------'
        />
      </Fade>
      <Grid container justify='center'>
        {AmbassadorData.map(data => (
          <Grid
            item
            md={4}
            key={data.title}
            className={classnames([
              'm-10 p-10 flex-col justify-center',
              classes.containerContent,
            ])}
          >
            <Fade bottom>
              <div
                className={classnames([
                  ' mx-auto rounded-full h-32 w-32 bg-white flex items-center justify-center icon',
                  classes.borderPink,
                ])}
              >
                <data.icon style={{ fontSize: '70px' }} />
              </div>
            </Fade>
            <Fade bottom cascade>
              <div className='my-5 text-white'>
                <Typography variant='h5'>{data.title}</Typography>
              </div>
              <Typography
                className={classnames(['text-white', classes.content])}
              >
                {data.desc}
              </Typography>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Ambassador
