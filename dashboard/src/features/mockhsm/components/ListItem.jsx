import React from 'react'
import { Link } from 'react-router'

class ListItem extends React.Component {
  render() {
    const item = this.props.item

    return(
      <tr>
        <td>{item.alias}</td>
        <td><code>{item.xpub}</code></td>
        <td></td>
      </tr>
    )
  }
}

export default ListItem
