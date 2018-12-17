import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <Grid container justify="center">
    <Grid item xs={10} sm={9} md={8}>
      <Grid container spacing={24}>
        <Grid container item justify="flex-end">
          <Fab color="primary" href="/addToDo">
            <AddIcon />
          </Fab>
        </Grid>
        {todos.map(({ id, title, description }) => (
          <Grid container direction="column" item key={id}>
            <TodoItem title={title} description={description} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

TodoList.defaultProps = {
  todos: [],
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
