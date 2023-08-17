import React, {useState} from 'react';
import './App.css';
import Accordion from "./componens/Accordion/Accordion";
import {Rating, RatingValueType} from "./componens/Rating/Rating";
import OnOff from "./componens/OnOff";
import {UncontrolledAccordion} from "./componens/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./componens/UncontrolledRating/UncontrolledRating";


function sum () {

    alert('Hello IT- Incubator')
}



function App() {

let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>
            <OnOff on={false}/>
            <UncontrolledAccordion titleValue={"Меню"} />
            {/*<UncontrolledAccordion titleValue={"Меню"} />*/}
            <Rating value={ratingValue}  onClick={setRatingValue}/>
            <UncontrolledRating />

            <Accordion titleValue={"Сайт бар"} collapced={false}/>

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
