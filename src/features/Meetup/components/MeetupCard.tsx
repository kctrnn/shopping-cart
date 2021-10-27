import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Meetup } from 'models';

export interface MeetupCardProps {
  meetup: Meetup;
}

function MeetupCard({ meetup }: MeetupCardProps) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height={300} image={meetup.image} alt={meetup.title} />

        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {meetup.title}
          </Typography>

          <Typography variant="body2" mb={2} fontStyle="italic">
            {meetup.address}
          </Typography>

          <Typography variant="body2">{meetup.description}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: 'center', py: 2 }}>
        <Button size="small" color="primary" variant="outlined">
          Add to favorites
        </Button>
      </CardActions>
    </Card>
  );
}

export default MeetupCard;
