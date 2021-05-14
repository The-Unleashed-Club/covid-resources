import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import SimpleModal from './PopUp';
//import Main from '../Pages/MainPage';
import { Link } from "react-router-dom";


//import StateData from './StateData'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
    margin: '2%',
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
       <SimpleModal />
      </CardActions>
    </Card>
  );
};
const styles = {
  btn: {
    backgroundColor: '#808080',
    paddingLeft: '0.5%',
    paddingRight: '0.5%',
    paddingTop: '0.2%',
    paddingBottom: '0.2%',
    margin: '1%',
    color: '#FFFF00',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',


  },
};
