import React, { useState } from 'react';
import { Card, CardMedia, Button, CardContent, Typography, Grid } from '@material-ui/core';
import { useDogAPI } from './useDogAPI';
import { Dog } from './dog';

function App() {
  const nextDog = useDogAPI();
  const [dog, setDog] = useState<Dog>();

  return (
    <>

      <Grid
        container
        justify='center'
        alignItems='center'
        direction='column'
        spacing={2}
        style={{ margin: '10% 0' }}
      >
        <Grid item>

          <DogCard dog={dog} />
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={async (e) => { setDog(await nextDog()) }}>{dog && dog?.image_url && "New Dog!"}{(!dog || !dog?.image_url) && 'Click Me'}</Button>

        </Grid>
      </Grid>

    </>
  );
}

function DogCard({ dog }: { dog: Dog | undefined }) {
  return (
    <>
      {dog && dog?.image_url &&
        <Card style={{ maxWidth: 350 }}>
          <CardMedia image={dog?.image_url} style={{ height: 0, paddingTop: '56.25%' }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dog.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {dog.temperament}
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  );
}

export default App;
