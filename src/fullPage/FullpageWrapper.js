import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import Banner from '../banner/components/banner';
import Servicios from '../servicios/components/servicios';
import Beneficios from '../beneficios/components/beneficios';
import Estrategia from '../estrategia/components/estrategia';

const fullpageOptions = {
  callbacks: ['onLeave'],
};

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <div className="section Banner">
          <Banner fullpageApi={fullpageApi}/>
        </div>
        <div className="section">
			<Servicios />
        </div>
        <div className="section">
			<Beneficios />
        </div>
        <div className="section">
			<p>Section 2</p>
			<Estrategia />
        </div>
      </div>
    );
  }}
/>);

export default FullpageWrapper;