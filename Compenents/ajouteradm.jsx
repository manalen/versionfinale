import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';

class ajouteradm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login :'',
            id : this.props.match.params.idadmin,
            mdp:'',
            nom:'',
            prenom:'', 
            fonction:'',
            notenregitre: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
    }
    componentDidMount() {
    }
    onSubmit(values) {
        let admin = {
          
            login: values.login,
            mdp: values.mdp,
            nom: values.nom,
            prenom: values.prenom,
            fonction: values.fonction,
          
        }
      
        PatientService.amine2(admin)
        this.setState({notenregitre: true})
        setTimeout(this.bni,
            3000
        )
    }
    bni(){
        this.props.history.push(`/admin/${this.state.id}/listeadmin`)
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


        let {  login,mdp, nom ,prenom ,fonction} = this.state
    
        return (
            <div>
                <div className="container" style={{paddingTop:"50px",borderRadius: "10px",position: "relative",width:"1000px", left:"90px",top: "150px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "450px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ login,mdp ,nom,prenom,fonction}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Login</label>
                                        <Field className="form-group" type="text" name="login" style={{position: "relative",left: "43px", width: "635px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Mot de passe</label>
                                        <Field className="form-group" type="password" name="mdp" style={{position: "relative",left: "12px", width: "635px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Nom</label>
                                        <Field className="form-group" type="text" name="nom" style={{position: "relative",left: "44px", width: "635px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Prénom</label>
                                        <Field className="form-group" type="text" name="prenom" style={{position: "relative",left: "33px", width: "635px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Fonction</label>
                                        <Field className="form-group" type="text" name="fonction" style={{position: "relative",left: "28px", width: "635px"}} />
                                    </fieldset>
                                    
                                    <button   className="btn btn-success" type="submit" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px   ",position: "absolute",left:"450px",top: "370px"}}>Enregistrer</button>
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

export default ajouteradm