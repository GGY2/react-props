import React from 'react';
import ExperiencesPanel from './ExperiencesPanel';

const options = [
    {  
       id: 1,
       title: 'Sunset joga',
       description: 'Enjoy joga vibes on a fresh air with world-class coaches',
       url: "./images/yoga.jpg"
    },
    {
       id: 2,
       title: 'Kayaking',
       description: 'Feel yourself a superhero - dive with sharks on a coral reef',
       url: "./images/kayak.jpg"
    },
    {
       id: 3,
       title: 'Snorkeling',
       description: 'Spend a great day in a desert glidinge normously tall dunes',
       url: "./images/snorkeling.jpg"
    }

];

const Experiences = () => {
    return(
        <div style={{display:'flex', height:'100vh', justifyContent:'center', alignItems:'center', gap:"3rem" }} >
        {
            options.map((option) => {
                return(
                    <ExperiencesPanel title={option.title} description={option.description} key={option.id} url={option.url} />
                );
            })
        }
        </div>
    );} 
    
    export default Experiences;