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
import StateCardData from './StateCardData';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '2%',
    boxShadow: '3px 3px 5px 6px #ccc'
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image"
          height="140"
          image={props.imgSrc}
          title="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.stName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link style={styles.btn} to={{
          pathname:'/Main',
          MainProps:{
            //stateID is the main id(which tells which button is clicked)
            //StateIdName:props.StateId,
            titleName:props.title,
            IndividualData : props.StateLeadsIndividualData
          }
        }}>Resources</Link>
      </CardActions>
    </Card>
    
  );

};
console.log(StateCardData[1].stateLeadsData);
const styles = {
  btn: {
    backgroundColor: '#34c759',
    padding: '5px',
    margin: '1%',
    fontSize: '20px',
    //borderStyle: 'solid',
    //borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#ffffff',
  },
};
