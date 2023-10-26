import React from "react"
import { useState } from "react"
import env from '../env.json'

function Create() {
  const [url, setUrl] = useState('')
  const [lineClass, setLineClass] = useState('hide')
  const [formClass, setFormClass] = useState('')

  let sendData = (obj) => {
    setFormClass('hide')
    setLineClass('')
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        if (response.result) setUrl(`${env.url}/${response.url}`)
      })
  }

  let loadDataFromForm = (event) => {
    event.preventDefault()
    let note = event.target.elements.note.value
    note = note.trim()
    if (note === '') {
      alert('Заполните поля')
      return false
    }
    sendData({"note": note})
  }

    return (
      <div className="row" style={{marginTop: "25px"}}>
        <div className="col-12">
          <div className="text">
            <div className="container">
              <form onSubmit={loadDataFromForm} className={formClass}>
                <div className="form-group">
                  <label htmlFor="note" className="h4 text-primary">Enter a note</label>
                  <textarea className="form-control" name="note" id="note" defaultValue="Test"></textarea>
                </div>
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
              </form>
              <div className={lineClass}>
                <div className="alert alert-primary" role="alert">{url}</div>
                <div className="text-right"><button className="btn btn-primary" onClick={() => window.location.reload()}>Create a new note</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Create;