/* eslint-disable react/prop-types */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

const useStyles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  subNested: {
    paddingLeft: theme.spacing(6)
  }
})

class MenuNode extends React.Component {
  render() {
    const { classes, nested, subNested } = this.props
    const { name, icon, link } = this.props.data
    let nestedClass = ''
    if (nested) {
      nestedClass = classes.nested
    }

    if (subNested) {
      nestedClass = classes.subNested
    }

    return (
      <React.Fragment>
        <ListItem button component={NavLink} to={link} className={nestedClass} exact>
          {icon && <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>}
          <ListItemText primary={name} />
        </ListItem>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(MenuNode)
