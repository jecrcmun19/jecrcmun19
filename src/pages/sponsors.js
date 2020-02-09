import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, Typography, useTheme } from '@material-ui/core'
import sponsorsData from '../data/sponsors-data'
import classnames from 'classnames'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
  borderStyle: {
    border: '5px solid #D90845',
  },
  textStyle: {
    color: '#D90845',
    fontWeight: 'bolder',
    textAlign: 'center',
  },
}))

function Sponsors(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.munTextProperty}
        >
          OUR SPONSORS
        </Typography>
        <Typography className='text-white' variant='h5'>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <Grid
        className={classnames([
          'flex flex-col justify-center items-center',
          classes.container,
        ])}
        // fluid={bgImage.sharp.fluid}
        // durationFadeIn={50}
      >
        {sponsorsData.map(data => {
          return (
            <React.Fragment>
              <Typography
                variant='h4'
                className={classnames([classes.textStyle, 'py-10'])}
              >
                {data.year}
              </Typography>
              <div className='py-5 flex flex-wrap justify-center'>
                {data.sponsors.map(sponsor => {
                  return (
                    <div className='m-5'>
                      <img
                        src={`/images/${sponsor}.png`}
                        alt={sponsor}
                        className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
                      />
                    </div>
                  )
                })}
              </div>
            </React.Fragment>
          )
        })}
      </Grid>
    </Wrapper>
  )
}

export default Sponsors
