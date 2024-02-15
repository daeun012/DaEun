import React from 'react';
import { Route } from 'react-router-dom';
import FunBun from './FunBun';
import Humechanic from './Humechanic';
import Portfolio from './Portfolio';
import LabelImage from './LabelImage';

function ProjectDetail() {
  return (
    <div className="container-detail">
      <Route path="/project/FunBun" component={FunBun} />
      <Route path="/project/Humechanic" component={Humechanic} />
      <Route path="/project/Portfolio" component={Portfolio} />
      <Route path="/project/LabelImage" component={LabelImage} />
    </div>
  );
}

export default ProjectDetail;
