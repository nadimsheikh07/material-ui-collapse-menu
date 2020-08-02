# material-ui-collapse-menu

> 

[![NPM](https://img.shields.io/npm/v/material-ui-collapse-menu.svg)](https://www.npmjs.com/package/material-ui-collapse-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-collapse-menu
```

## Usage

```jsx
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MaterialUICollapseMenu from 'material-ui-collapse-menu'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          "id": 1,
          "title": "",
          "items": [
            {
              "id": "dashboard",
              "icon": "dashboard",
              "name": "Dashboard",
              "link": "/dashboard"
            }
          ]
        },
        {
          "id": 2,
          "title": "",
          "items": [
            {
              "id": "catalog",
              "icon": "",
              "name": "Catalog",
              "subitems": [
                {
                  "id": "article",
                  "icon": "star",
                  "name": "Articles List",
                  "link": "/article"
                },
                {
                  "id": "article",
                  "icon": "",
                  "name": "Articles",
                  "subitems": [
                    {
                      "id": "articles-form",
                      "icon": "add_circle",
                      "name": "Articles Form",
                      "link": "/article/form/new"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }

  render() {
    const { items } = this.state
    return (
      <Router basename='/app'>
        <MaterialUICollapseMenu items={items} />
      </Router>
    )
  }
}


```

[Demo] (https://stackblitz.com/edit/material-ui-collapse-menu-demo)


## License

MIT © [nadimsheikh07](https://github.com/nadimsheikh07)
