/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { withRouter } from 'react-router'
import MenuCollapse from './menuCollapse'
import MenuNode from './menuNode'

const useStyles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
})

class MaterialUICollapseMenu extends Component {
  constructor() {
    super()
    this.state = { menu: [] }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { menu } = this.state
    menu[e] = !menu[e]
    this.setState({ menu })
  }

  render() {
    const { menu } = this.state
    const { items, classes } = this.props
    return (
      <React.Fragment>
        {items.map((list, listIndex) => {
          return (
            <List className={classes.root} key={`list${listIndex}`} subheader={<ListSubheader>{list.title}</ListSubheader>}>
              {list.items.map((item, itemIndex) => {
                return (
                  <div key={`listItemStart${itemIndex}`}>
                    {item.subitems != null ? (
                      <MenuCollapse key={`MenuCollapse${item.id}`} menu={menu} item={item} handleClick={this.handleClick} />
                    )
                      : (<MenuNode key={`MenuNode${item.id}`} data={item} />)
                    }
                  </div>
                )
              })}
              <Divider key={`Divider${listIndex}`} absolute />
            </List>
          )
        })}
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(useStyles)(MaterialUICollapseMenu))
