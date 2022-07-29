import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {
      let { noteURL } = useParams()
      const [noteText, setNoteText] = useState('')
      const [lineClass, setLineClass] = useState('hide')
      const [formClass, setFormClass] = useState('hide')
      const [errorClass, setErrorClass] = useState('hide')

      useEffect(() => {
        if (noteURL !== undefined) {
          fetch(env.urlBackend, {
            method: "POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({"url": noteURL})
          })
            .then(response => response.json())
            .then(response => {
              if (response.result) { 
                setNoteText(response.note)
                setLineClass('')
                setFormClass('hide')
                setErrorClass('hide')
              } else if (!response.result) {
                setLineClass('hide')
                setFormClass('hide')
                setErrorClass('')
              }
            })
        } else {
          setLineClass('hide')
          setFormClass('')
          setErrorClass('hide')
        }
      }, [])

      function getNote(event) {
        event.preventDefault()
        let url = event.target.elements.url.value
        url = url.trim()
        if (url === '') {
          alert('Заполните поля')
          return false
        }
        noteURL = url
        window.location.href = `${env.url}/${url}`
      }

      function searchNote() {
        window.location.href = env.url
      }
      
      return (
      <div className="row" style={{marginTop: "25px"}}>
        <div className="col-12">
          <div className="text">
            <div className="container">
              <div className={lineClass}>
                <div className="alert alert-success" role="alert">
                  <h4 className="h4 text-primary">Сообщение:</h4>
                  <div>{noteText}</div>
                </div>
                <div className="text-right"><button className="btn btn-primary" onClick={searchNote}>Смотреть еще одно сообщение</button></div>
              </div>
              <div className={errorClass}>
                <p>Произошла ошибка. Такой хеш не найден</p>
              </div>
              <div className={formClass}>
                <form action="" onSubmit={getNote}>
                  <div className="form-group">
                    <label htmlFor="url" className="h4 text-primary">Введите хеш заметки</label>
                    <input type="text" name="url" id="url" className="form-control" />
                  </div>
                  <div className="form-group text-right">
                    <button type="submit" className="btn btn-primary">Искать сообщение</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Note;