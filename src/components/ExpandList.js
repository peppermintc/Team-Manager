import React from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ChartPractice from './ChartPractice';

import LinearProgress from '@material-ui/core/LinearProgress';

export default function ExpandList(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let progress = 70;

  return (
    <>
      <ListItem button style={{ display:'grid', gridTemplateColumns: '1fr 1fr 10fr 1fr 4fr 1fr', textAlign: 'center' }} onClick={handleClick}>
        <div>{props.option.number}</div>
        <img style={{ height: '52px', border: '2.5px solid black' }} src={props.option.img}/>
        <div style={{ textAlign: 'left', paddingLeft:'20px' }}>{props.option.name}</div>
        <div>{props.option.position}</div>
        <div>{props.option.height}m / {props.option.weight}kg</div>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse id='0' in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem style={{ display:'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
              <img style={{ height: '200px', border: '2.5px solid black', marginLeft:'20px' }} src={props.option.img}/>
              <div style={{ marginLeft:'35px', marginTop:'25px' }}>
              <div>Back Number: {props.option.number}</div><br />
              <div>Name: {props.option.name}</div><br />
              <div>Position: {props.option.position}</div><br />
              <div>Height: {props.option.height}m</div><br />
              <div>Weight: {props.option.weight}kg</div><br />
              </div>
              {/* CHARTJS */}
              <ChartPractice index={props.index}/>                  
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
    </>
  );
}

