import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PatientService from './PatientService';
import './styles2.css';
import u132 from './u132.png';

class Medecin extends Component{
    constructor(props){
        super(props)
        this.state={
            num: '',
            cin:'',
            nom:'',
            prenom:'',
            Patients: [],
            idmed : this.props.match.params.id
            

        }
       
        this.afficherpatientbynum = this.afficherpatientbynum.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.afficherpatientbycin = this.afficherpatientbycin.bind(this)
        this.afficherpatientbyname=this.afficherpatientbyname.bind(this)
        
    }
    componentDidMount() {
        PatientService.hola()
        .then(
            response => {
                this.setState({ Patients:  response.data })
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
    afficherpatientbyname(nom,prenom){
        this.props.history.push(`/med/${this.state.idmed}/patientsbyname/${nom}/${prenom}`)
    }

    afficherpatientbynum(num){
        this.props.history.push(`/med/${this.state.idmed}/patientsbynum/${num}`)
    }
    
    afficherpatientbycin(lool){
        this.props.history.push(`/med/${this.state.idmed}/patientsbycin/${lool}`)

    }
    disconnexion(){
        this.props.history.push(`/login`)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }
    render(){
        let {num,cin,nom,prenom} = this.state

        return(
            <div>
                 
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "500px",height:"170px",position: "absolute", left:"430px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par nom</label>
                        <input className="form-control" type="text" name="nom" value={this.state.nom} onChange={this.handleChange} style={{width:"75px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <label style={{position:"absolute",left:"245px",top:"15px"}}>Et prénom</label>
                        <input className="form-control" type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} style={{width:"75px",position:"absolute",left:"320px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatientbyname(nom,prenom)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par numéro</label>
                        <input className="form-control" type="text" name="num" value={this.state.num} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatientbynum(num)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"115px"}}>Recherche par CIN</label>
                        <input className="form-control" type="text" name="cin" value={this.state.cin} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"115px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatientbycin(cin)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"112px",fontSize:"12px"}}>Recherche</button>
                    </div>
                </div>
                
                <div>
                <div className="container">
                    <h3>Tous les Patients</h3>
                    <div className="container" style={{borderRadius: "10px",width:"90%",position: "absolute", left:"150px",top: "300px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                        <table className="table"style={{width:"96%"}} >
                            <thead>
                                <tr>
                                    <th>Nom du patient</th>
                                    <th>Prenom du patient</th>
                                    <th>Numéro de série du patient</th>
                                    <th>CIN</th>
                                    <th>Age</th>
                                    <th>Adresse</th>
                               
                                    <th> Consultation</th>
                                    <th> Prescription</th>
                                    <th> Analyse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Patients.map(
                                        patient =>
                                        <tr key={patient.idpatient}>
                                            <td>{patient.nom}</td>
                                            <td>{patient.prenom}</td>
                                            <td>{patient.numserie}</td>
                                            <td>{patient.cin}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.adresse}</td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"5",height:"5",position:"absolute",fontSize:"12px"}} className="btn btn-success" onClick={() => this.afficherconsultation(patient.idpatient)}>Afficher </button></td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"5",height:"5",position:"absolute",fontSize:"12px"}} className="btn btn-success" onClick={() => this.afficherprescription(patient.idpatient)}>Afficher </button></td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"5",height:"5",position:"absolute",fontSize:"12px"}} className="btn btn-success" onClick={() => this.afficheranalyse(patient.idpatient)}>Afficher </button></td>
                                    
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
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
                                <Nav.Link href="#link"><button id="u135" className="btn btn-success text " onClick={() => this.connexion() } style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se connecter</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
                
                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand href="/"><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/#u115"><span id="u133">Présentation</span></Nav.Link>
                                <Nav.Link href="/#u97"><span id="u134">Equipe</span></Nav.Link>
                                <Nav.Link href="/#u1"><span id="u131">Contact</span></Nav.Link>
                                <Nav.Link href="/#u106"><span id="u137">Spécialités</span></Nav.Link>
                                <Nav.Link ><button id="u135" className="btn btn-success text " onClick={() => this.disconnexion() } style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se déconnecter</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        )
    }  
}

export default Medecin                                       