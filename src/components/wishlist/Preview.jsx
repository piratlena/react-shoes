import React from "react"
import './preview.module.scss'

const  Preview = ({name, image, id, price}) => {
   
    return (
    <div className="preview">
        <a>

        <div className="preview__circle">
                <figure className="preview__fig">
                    <img src={image} alt="Test" />
                </figure>
                </div>

                <div className="preview__data">
                    <h4 className="preview__title">{name}</h4>
                    <p className="preview__publisher">{price}</p>
                
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />

        </a>
    </div>
  )
  }

  export default Preview