import React from 'react';

const App = ({ channels }) => (
  <>
    <div className="chat__aside">
      <div className="channel">
        <span className="channel__text">Channels</span>
        <button type="button" className="channel__button">+</button>
      </div>
      <ul className="channels">
        { channels.map(({ id, name }) => (
          <li className="channels__item" key={id}>
            <button type="button" className="channels__button">
              <span>#</span>
              {name}
            </button>
          </li>
        )) }
      </ul>
    </div>
    <div className="chat__message">
      Container message
    </div>
  </>
);

export default App;
