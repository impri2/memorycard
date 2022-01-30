import React, { useState,useEffect } from 'react';
import '../styles/style.css'
import Card from './Card';
import uniqid from 'uniqid'
function CardDisplay(props) {
  const [colors,setColors]=useState(['black','red','green','yellow','purple','orange'])
  const [selectedColors,setSelectedColors]=useState([])
  const handler=(color)=>{
    console.log(color)
    if(selectedColors.lastIndexOf(color)!=-1){
            
            setSelectedColors([])
    }
    else{
        setSelectedColors(prev=>[...prev,color])
        
    }
  }
  useEffect(()=>props.setScore(selectedColors.length),[selectedColors])
  const cards=colors.map(element=>{
     return <Card color={element} onClick={()=>{handler(element)}} key={uniqid()}/>
  })

  return (<div className="display">{cards}</div>)
}

export default CardDisplay;
