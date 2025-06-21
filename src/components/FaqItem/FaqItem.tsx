import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [viewAnswer, setViewAnswer] = React.useState(false)
    const handleAnswer = ()=> {
        setViewAnswer((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div className={classes.faq_item_heading}>
                <h3 className={classes.faq_item_question}>{question}</h3>
                <button className={classes.faq_item_btn} onClick={handleAnswer}>
                    <img src={viewAnswer ? "/images/minus.png" : "/images/plus2.png"} alt="plus/minus" />
                </button>
            </div>
            <p className={viewAnswer ? classes.faq_item_answer : classes.d_n}>{answer}</p>
        </div>
    )
}

export default FaqItem