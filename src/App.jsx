import { useState, useEffect } from 'react';
import Home from './components/home';
import './App.css';

// Growthbook
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

const growthbook = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io',
  clientKey: 'sdk-CrIOK6yw95yu4jR6',
  enableDevMode: true,
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    console.log('Koha 🪙 Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

function App() {
  useEffect(() => {
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <main className='relative md:max-w-screen-sm w-3/4 mx-auto flex flex-col items-center'>
        <Home />
      </main>
    </GrowthBookProvider>
  );
}

export default App;
