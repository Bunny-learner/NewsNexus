import React, { Component } from 'react'
import './Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
}
