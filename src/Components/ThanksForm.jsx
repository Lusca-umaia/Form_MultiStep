import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './styleThanks.scss'

const emojiReview = {
    "very_satisfied": <BsFillEmojiHeartEyesFill />,
    "satisfied": <BsFillEmojiSmileFill />,
    "neutral": <BsFillEmojiNeutralFill />,
    "unsatisfied": <BsFillEmojiFrownFill />
}

export default function ThanksForm({ data }) {
    return (
        <div className='containerThanks'>
            <h2>Falta pouco...</h2>
            <p>A sua opinião é muito importante, em breve você receberá uma bonficiação ao realizar uma nova compra.</p>
            <p>Para concluir sua avaliação, clique no botão de <span style={{ fontWeight: '700' }}>Enviar</span> abaixo</p>
            <h3>Aqui está o resumo da sua avaliação, {data.name}</h3>
            <div className='group_satisfaction'>
                <p className='review'>
                    <span>Satisfação com o produto:</span>
                    {emojiReview[data.review]}
                </p>
                <p className='comment'>
                    <span>Comentário: </span>
                    {data.comment}
                </p>
            </div>


        </div>
    )
}