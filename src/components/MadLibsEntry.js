import React, { Component } from 'react'

import './MadLibsEntry.css'

class MadLibsEntry extends Component {
  render() {
    return (
      <div className="madlibs-entry">
        <p>Enter Your Star Wars Mad Libs</p>
        <form>
          <input
            type="text"
            value={this.props.madLibsEntry.food}
            onChange={this.props.handleFoodChange}
            placeholder="ENTER A FOOD ITEM"
            className="madlibs-input"
          />
          <input
            type="text"
            value={this.props.madLibsEntry.verb}
            onChange={this.props.handleVerbChange}
            placeholder="ENTER AN ACTION VERB"
            className="madlibs-input"
          />
          <input
            type="text"
            value={this.props.madLibsEntry.object}
            onChange={this.props.handleObjectChange}
            placeholder="ENTER AN OBJECT"
            className="madlibs-input"
          />
          <input
            type="text"
            value={this.props.madLibsEntry.animal}
            onChange={this.props.handleAnimalChange}
            placeholder="ENTER AN ANIMAL (plural)"
            className="madlibs-input"
          />
          <input
            type="text"
            value={this.props.madLibsEntry.beverage}
            onChange={this.props.handleBeverageChange}
            placeholder="ENTER A BEVERAGE"
            className="madlibs-input"
          />

          <button type="submit" onClick={this.props.revealCrawl} className="submit-button">
            SHOW OPENING CRAWL
          </button>
        </form>
      </div>
    )
  }
}

export default MadLibsEntry
