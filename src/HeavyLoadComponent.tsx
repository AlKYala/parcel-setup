import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store';

function ImgMediaCard() {

    const [bla, setBla] = useState(false);

    const count = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    React.useEffect(() => {
      
        console.log("DEBUG A");

        console.log("DEBUG B");

    }, [bla])
    

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <p>Count: {count}</p>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </CardActions>
    </Card>
  );
}

export default function HeavyLoadComponent() {
  return (
    <div>
      {[...Array(5000)].map((_, i) => (
        <ImgMediaCard key={i} />
      ))}
    </div>
  );
}
