import React from 'react'
import Wrapper from '../components/wrapper'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'

import { Committe, MembersUNSC } from '../data/country-data'
import Countries from '../data/country-code.json'
import Leaders from '../data/leader-code.json'

const useStyles = makeStyles(theme => ({
  banner: {
    background: `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main}), url(images/country-matrix.png)`,
    height: 300,
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  root: {
    paddingTop: 10,
    paddingBottom: 10,
    background: '#D90845',
  },
  cardContent: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5px',
    padding: '5px',
  },
  cardStyle: {
    marginBottom: '10%',
    marginTop: '4%',
    paddingTop: 0,
  },
  listItemStyle: {
    borderRadius: '2%',
    margin: 5,
  },
  cardProperty: {
    margin: 5,
    background: '#f7f7f7',
    marginTop: '5px',
  },
  textProperty: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 1,
    fontSize: '0.875rem',
    display: 'flex',
    justifyContent: 'center',
  },
  backgroundCardProperty: {
    // margin: '50px',
  },
  bgCardContentProperty: {
    padding: 0,
    // margin: '40px',
  },
  countryMatrixBackground: {
    background: 'url(images/committees-card.png)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '300px',
    padding: '6%',
  },
  textPropertyHeading: {
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: 1,
    display: 'flex',
    marginBottom: '1%',
    justifyContent: 'center',
    width: '100%',
    marginTop: '2%',
  },
  tabsTextProperty: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#FFF',
  },
  cardTextMargin: {
    margin: 'auto',
  },
}))

function CountryMatrix(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const bannerClasses = classNames(classes.header, classes.banner)
  const membersObject = {
    permanentMembers: 'Permanent Members',
    nonPermanentMembers: 'Non Permanent Members',
    observers: 'Observer',
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
      <div className={bannerClasses}></div>
      <div className={classes.countryMatrixBackground}>
        <div>
          <Card className={classes.backgroundCardProperty} raised={true}>
            <CardContent className={classes.bgCardContentProperty}>
              <Grid container justify='center' className={classes.root}>
                <Tabs
                  value={value}
                  variant='scrollable'
                  onChange={handleChange}
                  indicatorColor='#FFFF8C'
                  scrollButtons='desktop'
                >
                  <Tab className={classes.tabsTextProperty} label='UNSC' />
                  <Tab className={classes.tabsTextProperty} label='UNODC' />
                  <Tab className={classes.tabsTextProperty} label='DISEC' />
                  <Tab className={classes.tabsTextProperty} label='UNCSW' />
                  <Tab className={classes.tabsTextProperty} label='WHO' />
                  <Tab className={classes.tabsTextProperty} label='AIPPM' />
                </Tabs>
              </Grid>
              <div className={classes.cardStyle}>
                <div>
                  <span class='flag-icon flag-icon-gr w-32'></span>
                </div>
                {MembersUNSC.map(members => (
                  <Grid container justify='center' alignContent='space-around'>
                    {value === 0 ? (
                      <Typography className={classes.textPropertyHeading}>
                        {membersObject[members]}
                      </Typography>
                    ) : null}
                    {Committe[value][members].sort().map((text, index) => {
                      const CountryCode = Countries[`${text.toLowerCase()}`]
                      const LeaderCode = Leaders[`${text}`]
                      return (
                        <Grid
                          item
                          className={classes.listItemStyle}
                          xl={2}
                          md={4}
                          lg={3}
                          sm={6}
                          xs={12}
                        >
                          <Card className={classes.cardProperty}>
                            <CardContent className={classes.textProperty}>
                              <span className={classes.cardTextMargin}>
                                {text}
                              </span>
                              {CountryCode ? (
                                <img
                                  src={`/flags-mini/${CountryCode}.png`}
                                  className='h-5'
                                  alt={CountryCode}
                                />
                              ) : null}
                              {LeaderCode ? (
                                <img
                                  src={`/leader-logo/${LeaderCode}.png`}
                                  className='h-5'
                                  alt={CountryCode}
                                />
                              ) : null}
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}

export default CountryMatrix
