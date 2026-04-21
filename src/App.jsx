import { faqData } from './data'; // Bringing in your list of questions
import FAQItem from './FAQItem';   // Bringing in your reusable card template
import './App.css';                // Bringing in your styles

function App() {
  return (
    <div className="section">
      <div className="parent-container">
        
        {/* This is the Header section from your original HTML */}
        <div className="faq-header">
          <img src="/images/icon-star.svg" alt="star" />
          <strong>FAQs</strong>
        </div>

        {/* THE MAGIC LOOP: 
            For every 'item' in our data array, create one <FAQItem /> 
        */}
        <div className="faq-list">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;