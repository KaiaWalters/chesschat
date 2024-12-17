import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CommentCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            title
        </Typography>
        <Typography variant="h5" component="div">
            content
        </Typography>
      </CardContent>
      <CardActions>
        <Button display='none' size="small">View Board</Button>
      </CardActions>
    </Card>
  );
}