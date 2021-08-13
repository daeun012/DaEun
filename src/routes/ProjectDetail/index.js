import React from 'react';
import { Route } from 'react-router-dom';
import FunBun from './FunBun';
import Humechanic from './Humechanic';
import Portfolio from './Portfolio';

function ProjectDetail() {
  return (
    <div className="container-detail">
      <Route path="/project/FunBun" component={FunBun} />
      <Route path="/project/Humechanic" component={Humechanic} />
      <Route path="/project/Portfolio" component={Portfolio} />
    </div>
  );
}

export default ProjectDetail;
