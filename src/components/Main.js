function Main() {
    return (
      <div className="row" style={{marginTop: "25px"}}>
        <div className="col-12">
          <div className="text-center wrapper">
            <p>Чтобы создать сообщение нажмите на кнопку "создать сообщение". <br /> После этого вы можете либо перейти по ссылке которую создали либо перейти по кнопке "просмотреть сообщение".</p>
          </div>
          <div className="text wrapper">
            <ul className="row button-list">
              <li><a type="button" className="btn btn-primary" href="/create">Создать сообщение</a></li>
                &nbsp;&nbsp;&nbsp;
              <li><a type="button" className="btn btn-primary" href="/note">Просмотреть сообщение</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;