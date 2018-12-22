import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from '../components/TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <Grid container spacing={24}>
        <Grid container item justify="flex-end">
          <Fab color="primary" href="/add">
            <AddIcon />
          </Fab>
        </Grid>
        {todos.map(({ id, title, description }) => (
          <Grid container direction="column" item key={id}>
            <TodoItem title={title} description={description} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
