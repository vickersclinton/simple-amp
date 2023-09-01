import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "simpleRestApi"
const path = '/item'; 

const App = () => {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  //Function to fetch from our backend and update customers array
  function getItem(e) {
    let itemId = e.input
    API.get(myAPI, path + "/" + itemId)
       .then(response => {
         console.log(response)
         let newItems = [...items]
         newItems.push(response)
         setItems(newItems)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>Super Simple React App</h1>
      <div>
          <input placeholder="item id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getItem({input})}>Get Item From Backend</button>

      <h2 style={{visibility: items.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       items.map((thisItem, index) => {
         return (
        <div key={thisItem.itemId}>
          <span><b>ItemId:</b> {thisItem.itemId} - <b>CustomerName</b>: {thisItem.itemName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;