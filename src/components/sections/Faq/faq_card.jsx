import React from 'react'


const  FaqCard= ({title,paragraph}) => {
  return (
    <div >
     <div className=' relative flex items-center gap-2'>
            {/* Vecteur dans le coin supérieur gauche */}
            <div className='absolute top-0 -left-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5l7 7-7 7"></path>
                  </svg>
            </div>
            <div>
                <h5 className="text-blackUi text-t16 font-bold capitalize">{title}</h5>
                <p className="font-montserrat text-t14 leading-6 tracking-wide">{paragraph}</p>
            </div>

        </div>

    </div>
  )
}

export default FaqCard