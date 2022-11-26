import React from 'react'
import FAQ from './FAQ'
import "./ContainerHelp.css"

export const ContainerHelp = () => {
  return (
    <div className='container-fluid'>
        <div className='background'>
            <div className='Title-container'>
                <div className='title-description'>
                    <h1 className='Title'>Help & Support</h1>
                    <div className='para'>Let's take a step ahead and help you better.</div>

                </div>
            </div>
            <div className='faq-container'>
                <FAQ/>
            </div>

        </div>
    </div>
  )
}
