import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import './styleStep.scss'

export default function Steps({ currentStep }) {
    return (
        <div className="Steps">
            <div className="identificator active">
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`identificator ${currentStep >= 1 ? 'active' : ''}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`identificator ${currentStep >= 2 ? 'active' : ''}`}>
                <FiSend />
                <p>Envio</p>
            </div>
            <hr />
        </div>
    )
}