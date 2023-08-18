import React, {useState} from 'react';
import './App.css';
import Accordion from "./componens/Accordion/Accordion";
import {Rating, RatingValueType} from "./componens/Rating/Rating";
import OnOff from "./componens/OnOff/OnOff";
import {UncontrolledAccordion} from "./componens/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./componens/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./componens/UncontrolledOnOff/UncontrolledOnOff";


function sum () {

    alert('Hello IT- Incubator')
}



function App() {

let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
let [switchOn, setSwitchOn]  = useState<boolean>(false)

    return (
        <div className={"App"}>

            <UncontrolledAccordion titleValue={"Меню"} />
            {/*<UncontrolledAccordion titleValue={"Меню"} />*/}
            <Rating value={ratingValue}  onClick={setRatingValue}/>
            <UncontrolledRating />

            <Accordion
                titleValue={"Сайт бар"}
                collapced={accordionCollapsed}
                onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}}
            />

            <OnOff on={switchOn}
                   onChange={setSwitchOn}
            />
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<OnOff on={false}/>*/}

        {/*<Accordion titleValue={"Меню"} collapced={true}/>*/}
        {/*<Accordion titleValue={"Сайт бар"} collapced={false}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}


        </div>
    );
}
type  PageTitlePropsType = {
    title : string
}
function PageTitle(props:PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1> {props.title}</h1>
}


export default App;
