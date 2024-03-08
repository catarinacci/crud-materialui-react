import React from "react"
import Carousel from "react-material-ui-carousel"
import ItemUi from "../carouseIitemUi"
import slider from "../../helper/slider.json"

export default function CarouselUi(){

    return(
        <>
                
        <Carousel>
            {
                slider.map( (item, i) => <ItemUi key={i} item={item} /> )               
            }
        </Carousel>
    
        </>
    )
}