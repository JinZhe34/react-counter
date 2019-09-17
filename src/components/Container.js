import React, { Component } from 'react'

export default class Container extends Component {

  constructor() {
    super()
    this.state={
      count: 0
    }

    this.plusButtonClick = this.plusButtonClick.bind(this)
    this.resetButtonClick = this.resetButtonClick.bind(this)
    this.minusButtonClick = this.minusButtonClick.bind(this)
  }

  plusButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  resetButtonClick() {
    this.setState({
        count: 0
    })
  }

  minusButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count >=1 ? prevState.count - 1 : 0
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="clicker border border-secondary rounded">
          <div className="clicker-display d-flex align-items-center bg-light text-secondary">                        
            <div className="mx-auto display-1">{this.state.count}</div>
          </div>
          <div className="clicker-button-panel d-flex flex-row">
            <button className="btn btn-success w-100" onClick={this.plusButtonClick}>
              <i className="fa fa-plus fa-2x"></i>
            </button>
            <button className="btn btn-warning w-100" onClick={this.resetButtonClick}>
              <i className="fa fa-refresh fa-2x"></i>
            </button>
            <button className="btn btn-danger w-100" onClick={this.minusButtonClick}>
              <i className="fa fa-minus fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
