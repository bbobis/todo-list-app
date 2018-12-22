import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/es/styles';
import * as PropTypes from 'prop-types';
import { addToDo } from '../store/actions/todos';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

const styles = themes => ({
  formField: {
    margin: themes.spacing.unit,
  },
});

class AddToDo extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    title: '',
    description: '',
  };

  getNextId = () => this.props.todos.length + 1;

  handleTitleOnChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleDescriptionOnChange = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addTodo, history } = this.props;
    const { title, description } = this.state;

    addTodo({
      id: this.getNextId(),
      title,
      description,
    });

    history.push('/');
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader title="Add new to do" />
            <CardContent>
              <Grid container direction="column" justify="space-around">
                <TextField
                  type="text"
                  autoFocus
                  label="Title"
                  className={classes.formField}
                  value={this.state.title}
                  onChange={this.handleTitleOnChange}
                />
                <TextField
                  type="text"
                  multiline
                  rows={5}
                  label="Description"
                  className={classes.formField}
                  value={this.state.description}
                  onChange={this.handleDescriptionOnChange}
                />
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end">
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </form>
      </Paper>
    );
  }
}
const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addToDo, dispatch),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddToDo);
