import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import './styleReview.scss'

export default function ReviewForm({ data, updateFillHandler }) {
    return (
        <div className='review_form'>
            <div className='group_Radios'>
                <label>
                    <input
                        type="radio"
                        value="unsatisfied"
                        name='review'
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(e) => updateFillHandler('review', e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="neutral"
                        name='review'
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFillHandler('review', e.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="satisfied"
                        name='review'
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFillHandler('review', e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="very_satisfied"
                        name='review'
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e) => updateFillHandler('review', e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="comment">
                <label htmlFor="comment">Comentário:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder='Conte como foi sua experiência com o produto'
                    required
                    value={data.comment}
                    onChange={(e) => updateFillHandler('comment', e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}