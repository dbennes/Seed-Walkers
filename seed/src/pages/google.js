import React, { useState } from 'react';
import { authorizeUser, getDataFromGoogleFit, renderData } from './googleFit';

function Google () {
  const [data, setData] = useState(null);

  function handleClick() {
    authorizeUser();
  }

  function renderGoogleFitData() {
    if (data) {
      return renderData(data);
    } else {
      return <p>Clique no botão para autorizar e obter os dados do Google Fit.</p>;
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Autorizar e obter dados do Google Fit</button>
      {renderGoogleFitData()}
    </div>
  );
}

export default Google;
