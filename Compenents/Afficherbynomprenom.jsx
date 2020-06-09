
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientService from './PatientService';
import u132 from './u132.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Afficherbynomprenom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: [] ,
            Consultations:[] ,
            Prescriptions: [] ,
            message: null,
            nom: this.props.match.params.nom,
            prenom: this.props.match.params.prenom,
            idmed: this.props.match.params.idmed

        }
        this.bni=this.bni.bind(this)
        this.disconnexion=this.disconnexion.bind(this)
    }

    componentDidMount() {
        PatientService.namola(this.state.nom,this.state.prenom)
        .then(
            response => {
                this.setState({ patient: response.data })
            }
        )
        
    }
    afficherconsultation(idpatient){
        this.props.history.push(`/med/${this.state.idmed}/listeconsultation/${idpatient}`)


}

    
    afficherprescription(idpatient){
        this.props.history.push(`/med/${this.state.idmed}/listeprescription/${idpatient}`)
    
    
    }
    
    afficheranalyse(idpatient){
        this.props.history.push(`/med/${this.state.idmed}/listeanalyse/${idpatient}`)
    }

    bni(){
        this.props.history.push(`/medecin/${this.state.idmed}`)
    }

    disconnexion(){
        this.props.history.push(`/login`)
    }
        
    render() {
        return ( 
        <div>
            <div className="onglets" style={{borderRadius: "10px",width: "1100px",height:"350px",position: "absolute", left:"130px",top: "200px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">
                    <Tab eventKey="infosperso" title="Informations personnelles">
                        <div style={{borderRadius: "10px",width: "1000px",position: "absolute", left:"45px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                           <table className="table" >
                                <thead>
                                    <tr>
                                        <th>Nom du patient</th>
                                        <th>Prénom du patient</th>
                                        <th>Numéro de série du patient</th>
                                        <th>CIN</th>
                                        <th>Age</th>
                                        <th>Adresse</th>
                                        <th>Consultations</th>
                                        <th>Prescriptions</th>
                                        <th>Analyses médicales</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                {
                                    this.state.patient.map(
                                        patients =>
                                        <tr key={patients.idpatient}>
                                            <td>{patients.nom}</td>
                                            <td>{patients.prenom}</td>
                                            <td>{patients.numserie}</td>
                                            <td>{patients.cin}</td>
                                            <td>{patients.age}</td>
                                            <td>{patients.adresse}</td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height:"5",width:"5"}} className="btn btn-success" onClick={() => this.afficherconsultation(patients.idpatient)}>Afficher </button></td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height:"5",width:"5"}} className="btn btn-success" onClick={() => this.afficherprescription(patients.idpatient)}>Afficher </button></td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height:"5",width:"5"}} className="btn btn-success" onClick={() => this.afficheranalyse(patients.idpatient)}>Afficher </button></td>
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                            </div>
                    </Tab>
                    
                </Tabs>
                <button  onClick={this.bni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",position:"absolute",top:"270px",height: "50px",left:"410px"}}>Retour à la liste des patients! </button>
                        
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
export default Afficherbynomprenom