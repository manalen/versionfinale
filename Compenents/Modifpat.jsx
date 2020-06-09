import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';

class Modifpat   extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login :'',
            id : this.props.match.params.id,
            idmed : this.props.match.params.id1,
            mdp:'',
            nom:'',
            prenom:'', 
            numserie:'',
            adresse:'',
                    age:'',
            cin:'',


         
            notenregitre: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
    }
    componentDidMount() {PatientService.amine3(this.state.idmed)
        .then(
            response => {
                this.setState({age : response.data.age, login : response.data.login ,nom : response.data.nom,mdp: response.data.mdp, prenom : response.data.prenom,cin : response.data.cin, adresse : response.data.adresse})
                
            }
        )
}
    
    onSubmit(values) {
        let patient = {
         idpatient : this.state.idmed,
            login: values.login,
            mdp: values.mdp,
            nom: values.nom,
            prenom: values.prenom,
            numserie: values.numserie,
            adresse: values.adresse,
            cin: values.cin,
            age : values.age
        }
      
        PatientService.amine7(patient)
        this.setState({notenregitre: true})
        setTimeout(this.bni,3000)
        }
    bni(){
        this.props.history.push(`/admin/${this.state.id}/listepatient`)
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
    render() {


        let {  login,mdp, nom ,prenom ,cin,adresse, numserie, age} = this.state
    
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Patient: {this.state.nom} {this.state.prenom}</div>
               
                <div className="container" style={{borderRadius: "10px",position: "absolute",width:"900px", left:"240px",top: "150px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "700px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ login,mdp ,nom,prenom,cin,adresse,age,numserie}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Login</label>
                                        <Field className="form-control" type="text" name="login" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Mot de passe</label>
                                        <Field className="form-control" type="password" name="mdp" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Nom</label>
                                        <Field className="form-control" type="text" name="nom" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Prénom</label>
                                        <Field className="form-control" type="text" name="prenom" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>CIN</label>
                                        <Field className="form-control" type="text" name="cin" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                     <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Adresse</label>
                                        <Field className="form-control" type="text" name="adresse" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                        <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Numéro de série</label>
                                        <Field className="form-control" type="text" name="numserie" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                        <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#435fbc"}}>Age</label>
                                        <Field className="form-control" type="text" name="age" style={{position: "relative",left: "100px", width: "635px"}} />                                    </fieldset>
                                       
                                    <button   className="btn btn-success" type="submit" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px   ",position: "absolute",left:"400px",top: "700px"}}>Enregistrer</button>
                                </Form>
                            )
                        }
                    </Formik>
    
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

export default Modifpat