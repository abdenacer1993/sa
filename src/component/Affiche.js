import React, { Component } from 'react';
import logo from './moi.jpg';

class Affiche extends Component {
  
  state = { 
    fullname : "Hansaoui Abdenacer",
      bio : "Développeur web avec des compétences solides en résolution de problèmes et une expérience reconnue dans la création et la conception de logiciel dans un environnement d'essai.",
      profession : "Développeur Web ",
      img : { logo },
      counterpro : 0,
      
      
   }
   componentDidMount = () => {
    setInterval(() => {
      this.setState((pre) => ({
        counterpro: pre.counterpro+1,
      }));
    }, 1000);
  };
   
  render() { 
    return ( 
      <div>
        
                
                
                
                <div className="text-center mt-3">
                    
                  <div className="text-center">
      
                      <img src={this.state.img.logo} style={{width:"150px", borderRadius:"30px"}} className="rounded-circle" alt=""/>
                  </div>   
                    
                <div>
      
                    <h5 className="mt-2 mb-0">{this.state.fullname}</h5>
                    <div className="px-4 mt-1">
                      <p className="fonts"><strong>{this.state.profession}</strong></p>
                    </div>
                    <div className="px-4 mt-1">
                      <p className="fonts">{this.state.bio}</p>
                    </div>
                    <p>{this.state.counterpro}</p>
          
          
           
         
                </div>
                   

      
                    
                    
                </div>
                
               
                
                
            </div>
            
         
     );
  }
}
 
export default Affiche;