import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import logo from './logo192.png'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Heading =(props)=>{
   return <h2>Functional Component World -- {props.title}</h2>
}

class HeadingWithClass extends React.Component{
    render(){
      return <h2>Class Component World -- {this.props.src}</h2>
    }
}
const CurrentDate=()=>{
 return <p>{+Date.now()},<HeadingWithClass /></p>
}
// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Heading title="heyy im from heading"/>
      
//       <CurrentDate/>
//     </React.StrictMode>
//   );
// },1000)


root.render(
  <React.StrictMode>
    <Heading/>
    <img src="https://www.theverge.com/2015/9/1/9239769/new-google-logo-announced/300/200" className="logo" alt="" />
    <CurrentDate/>
    <HeadingWithClass />
  </React.StrictMode>
);


