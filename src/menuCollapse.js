/* eslint-disable react/prop-types */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import MenuNode from './menuNode'
import { withRouter } from 'react-router'
import Icon from '@material-ui/core/Icon'

const useStyles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
})

class MenuCollapse extends React.Component {
  render() {
    const { handleClick, menu, item, classes, nested, location } = this.props

    // open menu if location is same
    if (location) {
      if (item) {
        if (item.subitems) {
          item.subitems.forEach(em1 => {
            if (em1.subitems) {
              em1.subitems.forEach(em2 => {
                if (location.pathname.startsWith(`${em2.link}`)) {
                  menu[em1.id] = true
                  menu[item.id] = true
                }
              })
            } else {
              if (location.pathname.startsWith(`${em1.link}`)) {
                menu[item.id] = true
              }
            }
          })
        } else {
          if (location.pathname.startsWith(`${item.id}`)) {
            menu[item.id] = true
          }
        }
      }
    }

    return (
      <React.Fragment>
        <ListItem button onClick={() => { handleClick(item.id) }} className={nested ? classes.nested : ''}>
          {item.icon && <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>}

          <ListItemText primary={item.name} />
          {menu[item.id] ? (<ExpandLess />) : (<ExpandMore />)}
        </ListItem>
        <Collapse
          component='li'
          in={menu[item.id]}
          timeout='auto'
          unmountOnExit
        >
          <List component='nav'>
            {item.subitems.map(
              sitem => {
                return (
                  sitem.subitems != null ? (
                    <MenuCollapse key={`SubMenuCollapse${sitem.id}`} menu={menu} classes={classes} item={sitem} handleClick={() => { handleClick(sitem.id) }} nested={true} />
                  )
                    : (
                      <MenuNode key={`SubMenuNode${sitem.id}`} data={sitem} nested={true} subNested={nested} />
                    )
                )
              }
            )}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(useStyles)(MenuCollapse))
