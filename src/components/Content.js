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

  let playerInfo = [
    { 
      number:'11',
      img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-4-300x300.jpg',
      name:'Mack Villarreal',
      position:'FW',
      height:'1.81', 
      weight:'76.1',
    },
    { 
      number:'3', 
      img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-3-300x300.jpg', 
      name:'Herschel Behringer', 
      position:'DF', 
      height:'1.84', 
      weight:'76.0' 
    },
    { 
      number:'5', 
      img:'http://demo.themeboy.com/football-club-soccer/wp-content/uploads/sites/34/sportspress-soccer-player-2-300x300.jpg', 
      name:'Mark Gerrard', 
      position:'DF', 
      height:'1.78', 
      weight:'74.0' 
    }
  ]

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
            <ExpandList option={playerInfo[0]} index={0}/>
            <ExpandList option={playerInfo[1]} index={1}/>
            <ExpandList option={playerInfo[2]} index={2}/>
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