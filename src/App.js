import React, { useState } from 'react';
import { Grid } from 'react-flexbox-grid';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

function App() {
  const [page, setPage] = useState(1);
  const renderPage = (Page = 1) => {
    switch (Page) {
      case 2:
        return <Page2 prevPage={() => setPage(1)} />;
      default:
        return <Page1 nextPage={() => setPage(2)} />;
    }
  };
  return (
    <div className="App">
      <Grid fluid>{renderPage(page)}</Grid>
    </div>
  );
}

export default App;
