import React, { useState } from 'react';
import { Grid } from 'react-flexbox-grid';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Grid fluid>
        {page === 1 ? (
          <Page1 nextPage={() => setPage(2)} />
        ) : (
          <Page2 prevPage={() => setPage(1)} />
        )}
      </Grid>
    </div>
  );
}

export default App;
