import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import styles from './index.module.scss';

class Project extends React.Component {
  state = {
    favoritesCount: 0,
  }

  favoriteProject = () => {
    this.setState({ favoritesCount: this.state.favoritesCount + 1 });
  }

  render() {
    const { title, description, image, demo, source } = this.props
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
        <CardActions disableSpacing>
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
          <Box marginLeft="auto">
            <IconButton aria-label="add to favorites" onClick={this.favoriteProject}>
              <Badge badgeContent={this.state.favoritesCount} max={99} color="secondary">
                <FavoriteIcon color="secondary" />
              </Badge>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    )
  }}

export default Project;
