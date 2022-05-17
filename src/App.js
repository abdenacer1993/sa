
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Affiche from './component/Affiche';
import Button from 'react-bootstrap/Button';
import logo from './moi.jpg';


import { Component } from 'react';



class App extends Component {
  state =  { 
    Person : {
      fullname : "Hansaoui Abdenacer",
      bio : "Développeur web avec des compétences solides en résolution de problèmes et une expérience reconnue dans la création et la conception de logiciel dans un environnement d'essai.",
      profession : "Développeur Web ",
      img : { logo },
      
    },
    show: false, 
    date: ""
  };
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };
  
   
   
  
  render() { 
    return (
      
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          
          <div className="col-md-7">
              
              <div className="card p-3 py-4">
                <p style={{color:'purple'}}><strong>{this.state.date}</strong></p>
                {this.state.show && <Affiche state={this.state}/>}
                <Button variant="outline-secondary" size="lg" onClick={()=>this.setState({show:!this.state.show})}>{this.state.show?"Hide":"Show"}</Button>
                
      
              </div>
        </div>
      </div>
      </div>

    
    
    );
  }
}

 
export default App;