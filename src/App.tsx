import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Application } from './components/application/application'
import Greet from './components/greet/greet'
import { Skills } from './components/skills/skills'
import Counter from './components/counter/counter'
import { AppProviders } from './providers/app-providers'
import { MuiMode } from './components/mui/mui-mode'
import { CounterTwo } from './components/counter-two/counter-two'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <CounterTwo count={0} />
      </div>
    </AppProviders>
  )
}

export default App
