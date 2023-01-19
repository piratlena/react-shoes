import React from "react"
import './preview.module.scss'

const  Preview = ({description, image, id, price}) => {
   
    return (
    <div className="preview">
        

              <div className="preview__circle">
                <figure className="preview__fig">
                    <img src={image} alt="Test" />
                </figure>
            </div>

                <div className="preview__data">
                    <div className="preview__title">{description}</div>
                    <div className="preview__price">{price}</div>
                
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />

        
    </div>
  )
  }

  export default Preview