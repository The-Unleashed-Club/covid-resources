import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    width: 'max-content',
   // margin: '2%',
    boxShadow: '3px 3px 5px 6px #ccc',
    maxWidth: 345,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          City : {props.City}
        </Typography>
        <Typography variant="body2" component="p">
        Resources Name : {props.nameOfResource}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Address :{props.Address}
        </Typography>
        <Typography variant="body2" component="p">
          Contact : {props.Contact}
        </Typography>
        <Typography variant="body2" component="p">
          Price :{props.Price}
        </Typography>
        <Typography variant="body2" component="p">
          Comments :{props.Comments}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        vendor Name :{props.vendorName}
        </Typography>
        <Typography variant="body2" component="p">
          Verfication Data Time :{props.verficationDataTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
