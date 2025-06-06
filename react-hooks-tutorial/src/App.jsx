import { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook'
import UseRefTimer from './hooks/UseRefTimer'
import UseMemoExample from './hooks/UseMemoExample'
import UseCallbackExample from './hooks/UseCallbackExample'
import UseContextExample from './hooks/UseContextExample'
import UseReducerExample from './hooks/UseReducerExample'

function App() {

  return (
    <div>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseRefTimer />
      <UseMemoExample/>
      <UseCallbackExample/>
      <UseContextExample/>
      <UseReducerExample/>
    </div>
  )
}

export default App
