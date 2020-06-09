
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './othmane.css';
import PatientService from './PatientService';
import u132 from './u132.png';


class Listerdv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Rdvs: [],
            message: null,
            Medecins:[],
            id: this.props.match.params.id     ,
            num:'',
            Patients :[]     

        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.afficherpatientbynum = this.afficherpatientbynum.bind(this)
        this.mni=this.mni.bind(this)
      

    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        PatientService.showallrdv()
            .then(
                response => {
                    this.setState({ Rdvs:  response.data })
                    console.log(this.state.Rdvs)
                }
            )
            PatientService.showmedrdv()
            .then(
                response => {
                    this.setState({ Medecins:  response.data })
                }
            )
            PatientService.showpatrdv()
            .then(
                response => {
                    this.setState({ Patients:  response.data })
                }
            )
    }
    
    mni(){
        this.props.history.push(`/admin/${this.state.id}/ajouterrdv`)
        console.log('voila')

    }
    afficherpatientbynum(){
        this.props.history.push(`/admin/${this.state.id}/listerdv/${this.state.num}`)

    }
    
    
    
      
        



    render() {
        let {num} = this.state
        return (
            <div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "500px",height:"170px",position: "absolute", left:"390px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>num serie</label>
                        <input className="form-control" type="text" name="num" value={this.state.num} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatientbynum(num)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    
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
                        <table className="table" style={{ width: "20%",  position: "absolute",left:"600px",top:"0px"}} >
                            <thead>
                                <tr>
                                    <th>patient</th>
                                   
                                  
                               
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Patients.map(
                                        patient =>
                                        <tr>
                                        <td>{patient.nom}</td>
                                          
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

export default Listerdv