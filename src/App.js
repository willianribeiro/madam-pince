import React, { Component } from 'react'
import MadamPinceApi from './services/MadamPinceApi'

class App extends Component {
  render() {

    const promise2 = MadamPinceApi.get_library()
    promise2.then(response => console.log('get_library()', response))

    const promise3 = MadamPinceApi.list_entries()
    promise3.then(response => console.log('list_entries()', response))

    const promise4 = MadamPinceApi.get_entry('Jk5Jb3hCV3g3dXhIM3V1Z3RmQGU')
    promise4.then(response => console.log('get_entry(id)', response))

    return (
      <div className="App">
        Hello
      </div>
    )
  }
}

export default App
