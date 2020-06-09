import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';

class Modifiermed extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            login :'',
       
            id : this.props.match.params.idamdin,
            idmed : this.props.match.params.id,
            mdp:'',
            nom:'',
            prenom:'', 
            spécialité:'',

         
            notenregitre: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
        this.deconnexion=this.deconnexion.bind(this)
    }
    componentDidMount() {PatientService.manal3(this.state.idmed)
        .then(
            response => {
                this.setState({ login : response.data.login ,nom : response.data.nom,mdp: response.data.mdp, prenom : response.data.prenom,spécialité : response.data.spécialité})
                
            }
        )
    }
    onSubmit(values) {
        let medecin = {
         idmedecin : this.state.idmed,
            login: values.login,
            mdp: values.mdp,
            nom: values.nom,
            prenom: values.prenom,
            spécialité: values.spécialité,
          
        }
        PatientService.manal2(medecin)
        this.setState({notenregitre: true})
        setTimeout(this.bni,
            3000
        )
    }
    deconnexion(){
        this.props.history.push(`/login`)
    }
    bni(){
        this.props.history.push(`/admin/${this.state.id}/listemedecin`)
    }
    render() {


        let {  login,mdp, nom ,prenom ,spécialité} = this.state
    
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Médecin: {this.state.nom} {this.state.prenom}</div>

                <div className="container" style={{paddingTop:"50px",borderRadius: "10px",position: "absolute",width:"750px", left:"340px",top: "200px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "450px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ login,mdp ,nom,prenom,spécialité}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4",position:"absolute",left:"40px"}}>Login</label>
                                        <Field className="form-control" type="text" name="login" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "200px", width: "400px"}}/>                                    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4",position:"absolute",left:"40px",top:"130px"}}>Mot de passe</label>
                                        <Field className="form-control" type="password" name="mdp" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "absolute",left: "215px",top:"130px", width: "400px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4",position:"absolute",left:"40px",top:"205px"}}>Nom</label>
                                        <Field className="form-control" type="text" name="nom" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "absolute",left: "215px",top:"210px", width: "400px"}}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4",position:"absolute",left:"40px",top:"290px"}}>Prénom</label>
                                        <Field className="form-control" type="text" name="prenom" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "absolute",left: "215px",top:"290px", width: "400px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4",position:"absolute",left:"40px",top:"370px"}}>Spécialité médicale</label>
                                        <Field className="form-control" type="text" name="spécialité" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "absolute",left: "215px",top:"370px", width: "400px"}}/>
                                    </fieldset>
                                    
                                    <button   className="btn btn-success" type="submit" style={ {backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px   ",position: "absolute",left:"330px",top: "500px"}}>Enregistrer</button>
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

export default Modifiermed