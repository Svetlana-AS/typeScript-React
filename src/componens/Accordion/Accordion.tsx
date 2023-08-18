import React from "react";
type  AccordionPropsType = {
    titleValue : string
    collapced : boolean
    onChange:()=>void
}
function Accordion (props : AccordionPropsType) {



         return <div>
             <AccordionTitle title ={props.titleValue}
                             onChange={props.onChange}
             />
             {!props.collapced && <AccordionBody/>}
         </div>
}
type  AccordionTitlePropsType = {
    title : string
    onChange:()=>void
}
function AccordionTitle (props : AccordionTitlePropsType){

    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onChange}>{props.title}</h3>
}
function AccordionBody() {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion;