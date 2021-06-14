import * as React from 'react';
import logo from './logo.svg';
import Card from './Card';

import './App.css';

//import {serv} from '../data/servises';





const App = () => {




  return (

    <div className="page">

        <section className="calculator">   

        
          <h1 className="calculator__title">
            Fitness calculators
          </h1>


          <div className="calc">


              <div className="calc__item">
                <h2>Calories calculator</h2>

                <Card 
	              //serv={serv} 
	            ></Card>

              </div>
              
          </div>

     
         
          

         </section>


    </div>

  )

}  

export default App