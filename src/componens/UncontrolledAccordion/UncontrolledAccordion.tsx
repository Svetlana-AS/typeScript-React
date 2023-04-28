import React, {FormEvent, useState} from "react";
type  AccordionPropsType = {
    titleValue : string

}
export function UncontrolledAccordion (props : AccordionPropsType) {



let [collapced, setCollapced]=useState<boolean>(false)

   const controlledHahdler =(e:React.MouseEvent<HTMLButtonElement>)=>{
       setCollapced(!collapced)
   }

    return <div>
        <AccordionTitle title ={props.titleValue}/>
        <button onClick={controlledHahdler}>TOGGLE</button>
        {!collapced && <AccordionBody/>}
    </div>
}
export type  AccordionTitlePropsType = {
    title : string
}
export function AccordionTitle (props : AccordionTitlePropsType){

    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}
export function AccordionBody() {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
