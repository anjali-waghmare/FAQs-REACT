import { useState } from 'react';
import plusIcon from '../public/images/icon-plus.svg';
import minusIcon from '../public/images/icon-minus.svg';


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-card">
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        {/* This button changes based on isOpen */}
        <img src={isOpen ? minusIcon : plusIcon} 
         alt="toggle icon" 
         className='toggle-icon'
         />
     
      </div>

      {/* This only shows if isOpen is TRUE */}
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
}

export default FAQItem;