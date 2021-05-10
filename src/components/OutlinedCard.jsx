import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 'max-content',
    margin: '2%',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          city : {props.city}
        </Typography>
        <Typography variant="h5" component="h2">
        Name Of Facility :{props.nameOfFacility}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        address :{props.address}
        </Typography>
        <Typography variant="body2" component="p">
        contact : {props.contact}
        </Typography>
        <Typography variant="body2" component="p">
        price :{props.price}
        </Typography>
        <Typography variant="body2" component="p">
        comments :{props.comments}
        </Typography>
        <Typography variant="body2" component="p">
        Verfication Data Time :{props.VerficationDataTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
