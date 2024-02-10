import React from 'react'
import Text from '../../utils/TextAndParagraph/Text'
import FaqCard from './faq_card'


const Faq = () => {
  return (
    <div className='max-w-screen-lg  mx-auto'>
        <div className='w-[607px] h-[120px] '>
            <Text title="Pricing FAQs" 
                paragraph="Problems trying to resolve the conflict between 
                the two major realms of Classical physics"
            />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-4 space-x-4'>
            <FaqCard 
                    title="the quick fox jumps over the lazy dog"
                    paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                    dolor do met sent. RELIT official consequent door ENIM 
                    RELIT Mollie. Excitation venial consequent sent 
                    nostrum met."
            />
            <FaqCard 
                title="the quick fox jumps over the lazy dog"
                paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                dolor do met sent. RELIT official consequent door ENIM 
                RELIT Mollie. Excitation venial consequent sent 
                nostrum met."
            />
             <FaqCard 
                title="the quick fox jumps over the lazy dog"
                paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                dolor do met sent. RELIT official consequent door ENIM 
                RELIT Mollie. Excitation venial consequent sent 
                nostrum met."
            />
            <FaqCard 
                title="the quick fox jumps over the lazy dog"
                paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                dolor do met sent. RELIT official consequent door ENIM 
                RELIT Mollie. Excitation venial consequent sent 
                nostrum met."
            />
            <FaqCard 
                title="the quick fox jumps over the lazy dog"
                paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                dolor do met sent. RELIT official consequent door ENIM 
                RELIT Mollie. Excitation venial consequent sent 
                nostrum met."
            />
             <FaqCard 
                title="the quick fox jumps over the lazy dog"
                paragraph="Met minim Mollie non desert Alamo est sit cliquey 
                dolor do met sent. RELIT official consequent door ENIM 
                RELIT Mollie. Excitation venial consequent sent 
                nostrum met."
            />
        </div>
       
       
       
    </div>
  )
}

export default Faq