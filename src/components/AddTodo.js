import React from 'react';
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

const styles = themes => ({
  formField: {
    margin: themes.spacing.unit,
  },
});

const AddToDo = ({ classes }) => (
  <Paper>
    <form>
      <Card>
        <CardHeader title="Add new to do" />
        <CardContent>
          <Grid container direction="column" justify="space-around">
            <TextField
              type="text"
              autoFocus
              label="Title"
              className={classes.formField}
            />
            <TextField
              type="text"
              multiline
              rows={5}
              label="Description"
              className={classes.formField}
            />
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="flex-end">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </form>
  </Paper>
);

AddToDo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddToDo);
