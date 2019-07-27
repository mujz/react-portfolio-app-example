import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './index.module.scss';

function Project({ title, description, image, demo, source }) {
  return (
    <Card className={styles.container}>
      <CardMedia
        className={styles.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      { (source || demo) &&
        <CardActions>
          { source &&
              <Button size="small" color="primary" href={source}>
                Source
              </Button>
          }
          { demo &&
              <Button size="small" color="primary" href={demo}>
                Demo
              </Button>
          }
        </CardActions>
      }
    </Card>
  )
}

export default Project;
