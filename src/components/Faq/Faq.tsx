import { FaqItemsList } from '../../db'
import {FaqItem} from '../'
import './Faq.css'

const Faq = () => {
  return (
    <section>
        <h2 className="page-bl-title faq-title">Frequently Asked <br /><span>Questions</span></h2>
        <div className="faq-box d-f">
            {
               FaqItemsList.map((faq)=> {
                return (
                    <FaqItem
                        key={`faq${faq.id}`}
                        {...faq}
                    />
                ) 
               })
            }
        </div>
    </section>
  )
}

export default Faq