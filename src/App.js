import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/es/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import { todos as fakeTodos } from './data/todos';
import AddToDo from './components/AddTodo';

const App = () => (
  <Grid container spacing={16} direction="column">
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            To Do App
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item xs={12}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <TodoList todos={fakeTodos} {...props} />}
          />
          <Route path="/addTodo" component={AddToDo} />
        </Switch>
      </BrowserRouter>
    </Grid>
  </Grid>
);

export default App;
