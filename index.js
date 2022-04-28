import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >=1 && curDate <12)
{
     greeting = 'Good Morning';
     cssStyle.color = 'green';
}
else if(curDate >=2 && curDate <19)
{
     greeting = 'Good AfterNoon';
      cssStyle.color = 'orange';
}

else{
    greeting = "Good Night"
     cssStyle.color = 'grey';
}


ReactDOM.render(
    <>
    <div>
    <h1>Hello sir, <span style ={cssStyle}>{greeting}</span></h1>
    </div>
    </>,
    document.getElementById('root'),

);