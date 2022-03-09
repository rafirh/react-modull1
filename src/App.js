import "./App.css";
import Alert from "./components/Alert";
import React, { useState } from "react";
import Media from "./components/Media";

function App() {
  const [defaultVal, setDefaultVal] = useState({
    type: "danger",
    header: "Fatal Error",
    content: "ini content dari alert",
  });

  const changeTypeAlert = event => {
    const newVal = event.target.value;
    setDefaultVal({ type: newVal });
  };

  const changeHeader = event => {
    const newVal = event.target.value;
    setDefaultVal({ header: newVal });
  };

  const changeContentAlert = event => {
    const newVal = event.target.value;
    setDefaultVal({ content: newVal });
  };

  return (
    <div className="App container col-sm-6">
      <Alert
        type={defaultVal.type}
        header={defaultVal.header}
        content={defaultVal.content}
      >
        <h4>Alert Control</h4>
        <p className="text-left">Tipe Alert</p>
        <select
          className="text-left"
          name="type"
          value={defaultVal.type}
          onChange={changeTypeAlert}
        >
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <p className="text-left">Header Alert</p>
        <input
          type="text"
          name="header"
          className="form-control"
          value={defaultVal.header}
          onChange={changeHeader}
        />
        <p className="text-left">Content Alert</p>
        <input
          type="text"
          name="content"
          className="form-control"
          value={defaultVal.content}
          onChange={changeContentAlert}
        />
      </Alert>
    </div>
  );
}

export default App;
