import React from 'react';
import { useSnapshot } from 'valtio';
import Canvas from './Canvas';
import Customizer from './Pages/Customizer';
import Home from './Pages/Home';
import state from './Store';

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="App relative w-full h-screen transition-all ease-in">
      {snap.intro ? (
        <Home />
      ) : (
        <>
          <Canvas />
          <Customizer />
        </>
      )}
    </main>
  );
}

export default App;
