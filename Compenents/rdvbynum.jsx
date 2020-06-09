
import React , {Component} from 'react';
import PatientService from './PatientService'
import Ajouterconsu from './Ajouterconsu'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.css";
import './othmane.css'

import u132 from'./u132.png';

class rdvbynum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Rdvs: [],
            message: null,
            Medecins:[],
            id: this.props.match.params.id     ,
            num:'',
            Patients :[]  ,
            num:    this.props.match.params.num

        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.afficherpatientbynum = this.afficherpatientbynum.bind(this)
        this.mni=this.mni.bind(this)
      

    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        PatientService.findrdvbynumserie(this.state.num)
            .then(
                response => {
                    this.setState({ Rdvs:  response.data })
                    console.log(this.state.Rdvs)
                }
            )
            PatientService.medrdvnum()
            .then(
                response => {
                    this.setState({ Medecins:  response.data })
                }
            )
           
    }
    
    mni(){
        this.props.history.push(`/admin/${this.state.id}/ajouterrdv`)
        console.log('voila')

    }
    afficherpatientbynum(){

    }
    
    
    
      
        



    render() {
        let {num} = this.state
        return (
            <div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "500px",height:"170px",position: "absolute", left:"390px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    
                    
                    
                </div>
                <div className="container">
                    <h3>Tous les rdvs</h3>
                    <div className="container"style={{borderRadius: "10px",position: "absolute",width:"3000px", left:"90px",top: "300px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                        <table className="table"   style={{ width: "50%",  position: "relative",left:"0px",height: "0px",top:"0px"}} >
                            <thead>
                                <tr>
              

                                    <th >date</th>
                                 

                                    <th >etat</th>

                                 
                                    <th >Modifier</th>
                                  
                                
                                    
                             
                               
                             
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.Rdvs.map(
                                        rdv =>
                                        <tr key={rdv.idrdv}>
                                             <td>{rdv.date}</td>
                                            

                    
                                            <td>{rdv.etat}</td>
                                            <td><button className="btn btn-success" onClick={() => this.modifierrdv(rdv.idrdv)}>Modifier l'état </button></td>

                                            


                                          
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                        <table className="table" style={{ width: "20%",  position: "absolute",left:"900px",top:"0px"}} >
                            <thead>
                                <tr>
                                    <th>Medecin</th>
                                   
                                  
                               
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Medecins.map(
                                        medecin =>
                                        <tr>
                                        <td>{medecin.nom}</td>
                                          
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                      
                        
                       
                    </div>
                </div>
                    <div>
              

                    </div>
                    
             
                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand href="#home"><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#u115"><span id="u133">Présentation</span></Nav.Link>
                                <Nav.Link href="#u97"><span id="u134">Equipe</span></Nav.Link>
                                <Nav.Link href="#link"><span id="u131">Contact</span></Nav.Link>
                                <Nav.Link href="#u97"><span id="u137">Spécialités</span></Nav.Link>
                                <Nav.Link href="#link"><button id="u135" className="btn btn-success text " onClick={() => this.connexion() } style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se connecter</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            
            )
    }
}

export default rdvbynum