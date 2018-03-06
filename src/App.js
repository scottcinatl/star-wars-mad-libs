import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import MadLibsEntry from './components/MadLibsEntry'
import OpeningCrawl from './components/OpeningCrawl'
import PostCrawl from './components/PostCrawl'

class App extends Component {
  constructor() {
    super()
    this.state = {
      madLibsEntry: {
        food: '',
        verb: '',
        object: '',
        animal: '',
        beverage: '',
      },
      showCrawl: false,
      showPostCrawl: false,
    }

    this.handleFoodChange = this.handleFoodChange.bind(this)
    this.handleVerbChange = this.handleVerbChange.bind(this)
    this.handleObjectChange = this.handleObjectChange.bind(this)
    this.handleAnimalChange = this.handleAnimalChange.bind(this)
    this.handleBeverageChange = this.handleBeverageChange.bind(this)

    this.revealCrawl = this.revealCrawl.bind(this)
    this.newCrawl = this.newCrawl.bind(this)
  }

  handleFoodChange(event) {
    var foodEntry = event.target.value.toLowerCase().replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    foodEntry = foodEntry.replace(/[^a-zA-Z\d\s:]/gi, '')

    this.setState({
      madLibsEntry: {
        food: foodEntry,
        object: this.state.madLibsEntry.object,
        animal: this.state.madLibsEntry.animal,
        verb: this.state.madLibsEntry.verb,
        beverage: this.state.madLibsEntry.beverage,
      },
    })
  }

  handleVerbChange(event) {
    var verbEntry = event.target.value.toLowerCase().replace(/[^a-zA-Z\d\s:]/gi, '')

    this.setState({
      madLibsEntry: {
        food: this.state.madLibsEntry.food,
        object: this.state.madLibsEntry.object,
        animal: this.state.madLibsEntry.animal,
        verb: verbEntry,
        beverage: this.state.madLibsEntry.beverage,
      },
    })
  }

  handleObjectChange(event) {
    var objectEntry = event.target.value.replace(/[^a-zA-Z\d\s:]/gi, '')

    this.setState({
      madLibsEntry: {
        object: objectEntry,
        food: this.state.madLibsEntry.food,
        animal: this.state.madLibsEntry.animal,
        verb: this.state.madLibsEntry.verb,
        beverage: this.state.madLibsEntry.beverage,
      },
    })
  }

  handleAnimalChange(event) {
    var animalEntry = event.target.value.toLowerCase().replace(/[^a-zA-Z\d\s:]/gi, '')

    this.setState({
      madLibsEntry: {
        food: this.state.madLibsEntry.food,
        object: this.state.madLibsEntry.object,
        animal: animalEntry,
        verb: this.state.madLibsEntry.verb,
        beverage: this.state.madLibsEntry.beverage,
      },
    })
  }

  handleBeverageChange(event) {
    var beverageEntry = event.target.value.toLowerCase().replace(/[^a-zA-Z\d\s:]/gi, '')

    this.setState({
      madLibsEntry: {
        food: this.state.madLibsEntry.food,
        object: this.state.madLibsEntry.object,
        animal: this.state.madLibsEntry.animal,
        beverage: beverageEntry,
        verb: this.state.madLibsEntry.verb,
      },
    })
  }

  revealPostCrawl() {
    setTimeout(() => {
      this.setState({
        showCrawl: false,
        showPostCrawl: true,
      })
    }, 84999)
  }

  revealCrawl() {
    this.setState({ showCrawl: true })
    this.revealPostCrawl()
  }

  newCrawl() {
    window.location.reload()
  }

  render() {
    return (
      <div>
        {this.state.showCrawl === false &&
          this.state.showPostCrawl === false && (
            <div>
              <Header />

              <MadLibsEntry
                madLibsEntry={this.state.madLibsEntry}
                handleFoodChange={this.handleFoodChange}
                handleVerbChange={this.handleVerbChange}
                handleObjectChange={this.handleObjectChange}
                handleAnimalChange={this.handleAnimalChange}
                handleBeverageChange={this.handleBeverageChange}
                revealCrawl={this.revealCrawl}
              />
            </div>
          )}

        {this.state.showCrawl === true && <OpeningCrawl madLibsEntry={this.state.madLibsEntry} />}
        {this.state.showCrawl === false &&
          this.state.showPostCrawl === true && <PostCrawl revealCrawl={this.revealCrawl} newCrawl={this.newCrawl} />}
      </div>
    )
  }
}

export default App
