
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PatientService from './PatientService';
import './styles2.css';
import u132 from './u132.png';

class ListeAnalyse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Patients: [],
            message: null,
           
            id: this.props.match.params.id     ,
            idmedecin: this.props.match.params.idmed   ,
            nom:'',prenom:''  

        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.bni=this.bni.bind(this)
        this.mni=this.mni.bind(this)
        this.nompatient=this.nompatient.bind(this)

    }
    componentDidMount() {
        this.refreshCourses();
        this.nompatient()
    }
    refreshCourses() {
        PatientService.othmane5(this.state.id)
            .then(
                response => {
                    this.setState({ Patients:  response.data })
                }
            )
           
    }
    nompatient(){
        PatientService.bola(this.state.id)
            .then(
                response => {
                    this.setState({ nom:  response.data.nom })
                    this.setState({prenom:response.data.prenom})
                }
            )
        
    }
    bni(){
        this.props.history.push(`/medecin/${this.state.idmedecin}`)
        

    }
    mni(){
        this.props.history.push(`/med/${this.state.idmedecin}/ajouteranalyse/${this.state.id}`)
        console.log('voila')

    }
    disconnexion(){
        this.props.history.push(`/login`)
    }
    
    
    
      
        



    render() {
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Patient: {this.state.nom} {this.state.prenom}</div>

                <div className="container">
                    <h3>Tous les Patients</h3>
                    
                    <div className="container"style={{borderRadius: "10px",position: "absolute",width:"1200px", left:"120px",top: "300px",heigh:"5000px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
               

                        <table className="table"  >
                            <thead>
                                <tr>
                                    
                                    <th>date_creation</th>
                              
                                    <th>Glycémie</th>
                                    <th>Tension    </th>
                                    <th>Choléstérol   </th>
                                    <th>Transaminases   </th>
                                    <th>medecin_traitant   </th>


                                  
                               
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Patients.map(
                                        patient =>
                                        <tr key={patient.idanalyse}>
                                             <td>{patient.date_creation}</td>
                    
                                            <td>{patient.glycémie}</td>
                                            <td>{patient.tension}</td>
                                            <td>{patient.choléstérol}</td>
                                            <td>{patient.transaminases}</td>
                                            <td>{patient.medecin_traitant}</td>



                                          
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                     
                        
                        

                        
                      
                    </div>
                    <div>
                    <button  onClick={this.mni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",position:"absolute",top:"200px",height: "50px",left:"980px"}}>Ajouter les réultats d'une analyse </button>
                    <button  onClick={this.bni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",position:"absolute",top:"200px",height: "50px",left:"200px"}}>Retour à la liste des patients! </button>

                    </div>
                    
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
                                <Nav.Link ><button id="u135" className="btn btn-success text " onClick={() => this.disconnexion() } style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se déconnecter</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            )
    }
}

export default ListeAnalyse