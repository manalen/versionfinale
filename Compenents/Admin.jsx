import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PatientService from './PatientService';
import './styles2.css';
import u132 from './u132.png';



class Admin extends Component{
    constructor(props){
        super(props)
        this.state={
            spec: '',
           
            nom:'',
            prenom:'',
            idadmin: this.props.match.params.id,
            Medecins: [],
            

        }
        this.afficherMedbyspec = this.afficherMedbyspec.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
        this.afficherMedbyname=this.afficherMedbyname.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
        this.afficherMedbyspec = this.afficherMedbyspec.bind(this)
        this.mni=this.mni.bind(this)
        this.to=this.to.bind(this)
        
        
    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        PatientService.yolo()
            .then(
                response => {
                    this.setState({ Medecins:  response.data })
                }
            )
    }

    afficherMedbyname(nom,prenom){
        this.props.history.push(`/admin/${this.state.idadmin}/medbyname/${nom}/${prenom}`)
    }
    
    afficherMedbyspec(spec){
        this.props.history.push(`/admin/${this.state.idadmin}/medbyspec/${spec}`)
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
    supprimermedecin(med){
        PatientService.manal4(med);
        
        setTimeout(this.to,
           6000
        )

    

        

    }
    polo(){
        this.props.history.push(`/admin/${this.state.idadmin}/listerdv`)
    }
    to(){
        window.location.reload(false)

    }
    modifiermedecin(med){
        this.props.history.push(`/admin/${this.state.idadmin}/modifmed/${med}`)

    }
    nomayo(){
        this.props.history.push(`/admin/${this.state.idadmin}/listeadmin`)
    }
    ohayo(){
        this.props.history.push(`/admin/${this.state.idadmin}/listemedecin`)
       
    }
    kohayo(){
        this.props.history.push(`/admin/${this.state.idadmin}/listepatient`)
       
    }
    mni(){
        this.props.history.push(`/admin/${this.state.idadmin}/ajoutermed`)
    }
    deconnexion(){
        this.props.history.push(`/login`)
    }
    
    render(){
        let {spec,nom,prenom} = this.state
        

        return(
            
            <div>
                <h3 style={{fontFamily:"cursive",position:"relative",top:"60px",left:"90px",color:"#435fbc"}}>Gestion des médecins de la clinique</h3>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "500px",height:"170px",position: "absolute", left:"450px",top: "100px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par nom</label>
                        <input className="form-control" type="text" name="nom" value={this.state.nom} onChange={this.handleChange} style={{width:"75px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <label style={{position:"absolute",left:"245px",top:"15px"}}>Et prénom</label>
                        <input className="form-control" type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} style={{width:"75px",position:"absolute",left:"320px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherMedbyname(nom,prenom)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par spécialité</label>
                        <input className="form-control" type="text" name="spec" value={this.state.spec} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherMedbyspec(spec)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                   
                </div>
                <div>
                <button  onClick={this.mni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",position:"absolute",top:"250px",height: "50px",left:"620px"}}>Ajouter un Médecin </button>

                </div>
                
                <div>
                <div className="container">
                    <div className="container"style={{borderRadius: "10px",position: "absolute",width:"800px", left:"300px",top: "350px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th>Nom du médecin</th>
                                    <th>Prenom du médecin</th>
                                    <th>Spécialité</th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Medecins.map(
                                        medecin =>
                                        <tr key={medecin.idmedecin}>
                                            <td>{medecin.nom}</td>
                                            <td>{medecin.prenom}</td>
                                            <td>{medecin.spécialité}</td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}} className="btn btn-success" onClick={() => this.modifiermedecin(medecin.idmedecin)}>Modifier les informations </button></td>
                                            <td><button style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}} className="btn btn-success" onClick={() => this.supprimermedecin(medecin.idmedecin)}>Supprimer ce médecin </button></td>

                                            </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
                
                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand href="#home"><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link onClick={() => this.nomayo()}><span id="u133">Administrateurs</span></Nav.Link>
                                <Nav.Link onClick={() => this.polo()}><span id="u134">Rendez Vous</span></Nav.Link>
                               
                                <Nav.Link onClick={() => this.kohayo()}><span id="u131">Patients</span></Nav.Link>
                                <Nav.Link  onClick={() => this.ohayo()}><span id="u137">Médecins</span></Nav.Link>
                                <Nav.Link onClick={() => this.deconnexion()}><button id="u135" className="btn btn-success text "   style={{backgroundColor:"#F8F9FA",height:"45px",font:"arial",fontSize:"22px",color:"#4997D4", position:"absolute",top:"2px",left:"1100px"}}>Se déconnecter</button></Nav.Link>
                             </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        )
    }  
}
export default Admin                                       