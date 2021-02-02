import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  withStyles,
} from "@material-ui/core";
import styles from "./styles";
import { NavLink } from "react-router-dom";
class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.setHeight}
            image={movie.hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.tenPhim}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.moTa}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            <NavLink to={`/detail/${movie.maPhim}`}>Learn More</NavLink>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Movie);
