import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';


class Ajouterpres extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            medicament_prescrit :'',
            idmecin : this.props.match.params.idmed,
            id : this.props.match.params.id,
            date_debut_traitement:'',
            date_fin_traitement:'',
            motif_pres:'',
            nom:'',prenom:'',
            notenregitre: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
        this.nompatient=this.nompatient.bind(this)
    }
    componentDidMount() {
        this.nompatient()
    }
    onSubmit(values) {
        let prescription = {
            medicament_prescrit: values.medicament_prescrit,
            date_debut_traitement: values.date_debut_traitement,
            date_fin_traitement: values.date_fin_traitement,
            motif_pres: values.motif_pres
        }
        console.log(this.state.idmecin , this.state.id)
        PatientService.kmo(this.state.idmecin, this.state.id,prescription)
        this.setState({notenregitre: true})
        console.log('hrhrh')
        setTimeout(this.bni,
            3000
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
        this.props.history.push(`/med/${this.state.idmecin}/listeprescription/${this.state.id}`)
    }
    render() {
        let {  medicament_prescrit,motif_pres,date_debut_traitement,date_fin_traitement  } = this.state
    
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Patient: {this.state.nom} {this.state.prenom}</div>
               
                <div className="container" style={{paddingTop:"50px",borderRadius: "10px",position: "absolute",width:"900px", left:"250px",top: "200px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "420px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ medicament_prescrit,motif_pres,date_debut_traitement,date_fin_traitement }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Médicament prescris</label>
                                        <Field className="form-group" type="text" name="medicament_prescrit" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "53px", width: "400px"}}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Motif de prescription </label>
                                        <Field className="form-group" type="text" name="motif_pres" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "51px", width: "402px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Date de début du traitement</label>
                                        <Field className="form-group" type="date" name="date_debut_traitement" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "24px", width: "402px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Date de fin du traitement</label>
                                        <Field className="form-group" type="date" name="date_fin_traitement" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "36px", width: "402px"}} />
                                    </fieldset>
                                    
                                    <button   className="btn btn-success" type="submit" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px",position: "absolute",left:"410px",top: "340px"}}>Enregistrer</button>
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

export default Ajouterpres