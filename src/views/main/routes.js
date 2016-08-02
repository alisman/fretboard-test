import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Container from './Container'
import FretboardTester from './fretboardTester/fretboardTester';

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>

      <IndexRoute component={FretboardTester} />

    </Route>
  )
}

export default makeMainRoutes
