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

import ExpandList from './ExpandList';

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
  
  const [open0, setOpen0] = useState(false);
  const handleClick0 = () => {
    setOpen0(!open0);
  };
  const [open1, setOpen1] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
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
            <ExpandList option={{ number:'11', img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg', name:'Mack Villarreal', position:'FW', height:'1.81', weight:'76.1' }}/>
            <ExpandList option={{ number:'3', img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-3-300x300.jpg', name:'Herschel Behringer', position:'DF', height:'1.84', weight:'76.0' }}/>
            <ExpandList option={{ number:'5', img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-2-300x300.jpg', name:'Mark Gerrard', position:'DF', height:'1.78', weight:'74.0' }}/>
            {/* <ListItem button style={{ display:'grid', gridTemplateColumns: '1fr 1fr 10fr 1fr 4fr 1fr', textAlign: 'center' }} onClick={handleClick2}>
              <div>11</div>
              <img style={{ height: '52px', border: '2.5px solid black' }} src="http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg"/>
              <div style={{ textAlign: 'left', paddingLeft:'20px' }}>Mack Villarreal</div>
              <div>FW</div>
              <div>1.81m / 76.1kg</div>
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
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
            </Collapse> */}
            
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