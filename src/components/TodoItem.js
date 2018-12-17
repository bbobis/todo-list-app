import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import Divider from '@material-ui/core/es/Divider/Divider';

const styles = themes => ({
  cardHeaderRoot: {
    'background-color': '#6573c3',
  },
  cardHeaderTitle: {
    color: themes.palette.primary.contrastText,
  },
});

const TodoItem = ({ classes, title, description }) => (
  <Card>
    <CardHeader
      title={title}
      classes={{
        root: classes.cardHeaderRoot,
        title: classes.cardHeaderTitle,
      }}
    />
    <Divider />
    <CardContent>{description}</CardContent>
  </Card>
);

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(TodoItem);
