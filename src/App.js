import React from 'react';

const App = () => {
  return (
      <div className="container">
        <h1>SWAPI Interface</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" id="endpointInput" placeholder="Enter SWAPI endpoint" />
          <button className="btn btn-primary" id="submitBtn">Submit</button>
        </div>
        <div id="resultContainer">
          {/* Results will be displayed here */}
        </div>
        <div id="spinner" className="d-none">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
  );
};

export default App;

