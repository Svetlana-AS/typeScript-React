import React, {FormEvent, useState} from "react";
type  AccordionPropsType = {
    titleValue : string

}
export function UncontrolledAccordion (props : AccordionPropsType) {



let [collapced, setCollapced]=useState(false)

   // const controlledHahdler =(e:React.MouseEvent<HTMLButtonElement>)=>{
   //     setCollapced(!collapced)
   // }

    return <div>
        <AccordionTitle title ={props.titleValue} onClick={() => {setCollapced(!collapced)}}/>
        {/*<button onClick={controlledHahdler}>TOGGLE</button>*/}
        {!collapced && <AccordionBody/>}
    </div>
}
export type  AccordionTitlePropsType = {
    title : string
    onClick:()=>void
}
 function AccordionTitle (props : AccordionTitlePropsType){


    return (
    <h3 onClick={()=>{props.onClick ()}}>{props.title}</h3>
)
}
export function AccordionBody() {
    // console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
