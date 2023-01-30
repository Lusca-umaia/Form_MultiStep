//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import Steps from './Components/Steps'
import UserForm from './Components/UserFomr'
import ThanksForm from './Components/ThanksForm'
import ReviewForm from './Components/ReviewForm'

//Hooks
import useForm from './Hooks/useForm'
import { useState } from 'react'

//Style
import './App.scss'

const formTemplate = {
  "name": '',
  "email": '',
  "review": '',
  "comment": ''
}

function App() {
  const [data, setData] = useState(formTemplate)

  function updateFillHandler(key, value) {
    setData({ ...data, [key]: value })
  }
  console.log(data)
  const formComponents = [
    <UserForm data={data} updateFillHandler={updateFillHandler} />,
    <ReviewForm data={data} updateFillHandler={updateFillHandler} />,
    <ThanksForm data={data} />
  ]

  const { currentStep, currentComponent, changeStep, isLastStep, isInitialStep } = useForm(formComponents)

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos muito felizes com sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs_container">
            {currentComponent}
          </div>
          <div className="groupButtons">
            {isInitialStep ? null :
              <button type='button' onClick={(e) => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            }
            {isLastStep ? (
              <button type='submit'>
                <span>Enviar</span>
                <FiSend />
              </button>
            ) : (
              <button type='submit' >
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div >
    </div >
  )
}

export default App
