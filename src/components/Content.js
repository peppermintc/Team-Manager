import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import ChartPractice from './ChartPractice';
import HorizontalBar from './HorizontalBar';

import LinearProgress from '@material-ui/core/LinearProgress';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;
  
  const [open, setOpen] = useState(false);

 

  const handleClick = () => {
    setOpen(!open);
  };

  let progress = 70;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <List>
            <ListItem button style={{ display:'grid', gridTemplateColumns: '1fr 1fr 10fr 1fr 4fr 1fr', textAlign: 'center' }}>
              <div>11</div>
              <img style={{ height: '52px', border: '2.5px solid black' }} src="http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg"/>
              <div style={{ textAlign: 'left', paddingLeft:'20px' }}>Mack Villarreal</div>
              <div>FW</div>
              <div>1.81m / 76.1kg</div>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <ListItem button style={{ display:'grid', gridTemplateColumns: '1fr 1fr 10fr 1fr 4fr 1fr', textAlign: 'center' }} onClick={handleClick}>
              <div>11</div>
              <img style={{ height: '52px', border: '2.5px solid black' }} src="http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg"/>
              <div style={{ textAlign: 'left', paddingLeft:'20px' }}>Mack Villarreal</div>
              <div>FW</div>
              <div>1.81m / 76.1kg</div>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <ListItem button style={{ display:'grid', gridTemplateColumns: '1fr 1fr 10fr 1fr 4fr 1fr', textAlign: 'center' }} onClick={handleClick}>
              <div>11</div>
              <img style={{ height: '52px', border: '2.5px solid black' }} src="http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg"/>
              <div style={{ textAlign: 'left', paddingLeft:'20px' }}>Mack Villarreal</div>
              <div>FW</div>
              <div>1.81m / 76.1kg</div>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} style={{ display:'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
                  <img style={{ height: '200px', border: '2.5px solid black', marginLeft:'20px' }} src="http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg"/>
                  <div style={{ marginLeft:'35px', marginTop:'25px' }}>
                    <div>Back Number: 11</div><br />
                    <div>Name: Mack Villarreal</div><br />
                    <div>Position: FW</div><br />
                    <div>Height: 1.81m</div><br />
                    <div>Weight: 76.1kg</div><br />
                  </div>
                  {/* CHARTJS */}
                  <ChartPractice />                  
                </ListItem>
                <div style={{ paddingTop:'20px' }}>
                  <div style={{ display:'grid', gridTemplateColumns: '1fr 5fr', paddingRight:'50px' }}>
                    <div>Running</div>
                    <LinearProgress variant="determinate" value={progress} style={{top:'50%'}}/>
                    <br />
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns: '1fr 5fr', paddingRight:'50px' }}>
                    <div>Agility</div>
                    <LinearProgress variant="determinate" value={progress} style={{top:'50%'}}/>
                    <br />
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns: '1fr 5fr', paddingRight:'50px' }}>
                    <div>Mobility</div>
                    <LinearProgress variant="determinate" value={progress} style={{top:'50%'}}/>
                    <br />
                  </div>
                </div>
              </List>
            </Collapse>
            
          {/* <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <DraftsIcon />
                <img style={{ height: '100px' }} src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MjlfMTc1/MDAxNTMwMjQyNjc3NDQw.bLmWW-gnEuzCD5Bp02THTy1AAX8W4rv06QGFUDhtyekg.ZWRb58QYcSAuF3Xs0BJRBbkPCnEQ_TUQtmCCq7uQsqMg.JPEG.dlgodls5563/IMG_4145.jpg?type=w800" alt="profile photo" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem> */}
          
          </List>
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);