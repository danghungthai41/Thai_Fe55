import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Movie from "../../components/movie";
import { connect } from "react-redux";
import {
  getMovieListAction,
  getMovieListAPI,
} from "../../redux/actions/movie.action";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  renderListMovie = (list) => {
    return list?.map((item, index) => {
      return (
        <Grid item lg={3} md={4} sm={12} key={index}>
          <Movie movie={item} />
        </Grid>
      );
    });
  };
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={this.props.classes.changeBG}
        >
          Primary
        </Button>
        {/* container */}
        <Container maxWidth="lg">
          {/* row */}
          <Grid container>
            {/* col-lg-3 col-md-4 col-sm-12 */}
            {this.renderListMovie(this.props.movieList)}
          </Grid>
        </Container>
      </div>
    );
  }
  componentDidMount() {
    // dispatch action để call api
    this.props.getMovieListApi();
  }
}

const mapStateToProps = (state) => {
  return {
    // key là props của component : value là state trên store
    movieList: state.movie.movieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // key là props của component : value là phương thức gửi data lên store
    getMovieList: (movieList) => {
      dispatch(getMovieListAction(movieList));
    },
    getMovieListApi: () => {
      dispatch(getMovieListAPI());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
