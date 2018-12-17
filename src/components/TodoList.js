import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from './TodoItem';

const TodoList = ({ toDos }) => (
  <Grid container spacing={24}>
    <Grid container item justify="flex-end">
      <Fab color="primary" href="/add">
        <AddIcon />
      </Fab>
    </Grid>
    {toDos.map(({ id, title, description }) => (
      <Grid container direction="column" item key={id}>
        <TodoItem title={title} description={description} />
      </Grid>
    ))}
  </Grid>
);

TodoList.defaultProps = {
  toDos: [],
};
TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
