import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
