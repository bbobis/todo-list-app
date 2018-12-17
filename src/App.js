import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/es';
import * as PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { todos as fakeTodos } from './data/todos';
import AddToDo from './components/AddTodo';
import NavBar from './components/NavBar';

const styles = ({ spacing }) => ({
  mainContent: {
    paddingTop: spacing.unit * 3,
  },
});

const App = ({ classes }) => (
  <Grid container spacing={16} direction="column">
    <NavBar />
    <Grid container justify="center">
      <Grid item xs={10} sm={9} md={8}>
        <div className={classes.mainContent}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                exact
                render={props => <TodoList toDos={fakeTodos} {...props} />}
              />
              <Route path="/add" component={AddToDo} />
            </Switch>
          </BrowserRouter>
        </div>
      </Grid>
    </Grid>
  </Grid>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
