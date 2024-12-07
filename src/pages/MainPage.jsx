import React from 'react';
import About from '../components/about/About';
import Title from '../components/Title/Title';

const MainPage = () => {
    const info ={title:"Some Title", body:"Some Body"};

    return(
        <div>
            <Title text={"Hello World"}/>
            <About info={info}/>
        </div>
    )
}
export default MainPage;