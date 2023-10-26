function Main() {
    return (
      <div className="row" style={{marginTop: "25px"}}>
        <div className="col-12">
          <div className="text-center wrapper">
            <p>To create a message, click on the "create message" button. <br /> After this, you can either follow the link you created or click the “view message” button.</p>
          </div>
          <div className="text wrapper">
            <ul className="row button-list">
              <li><a type="button" className="btn btn-primary" href="/create">Create a message</a></li>
                &nbsp;&nbsp;&nbsp;
              <li><a type="button" className="btn btn-primary" href="/note">View message</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;