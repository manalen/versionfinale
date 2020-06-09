import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';


class Ajouteranalyse extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            Glycémie :'',
            idmecin : this.props.match.params.idmed,
            id : this.props.match.params.id,
            Tension:'',
            Choléstérol:'',
            Transaminases:'',
            medecin_traitant:'',
            notenregitre: false,
            nom:'',prenom:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
        this.nompatient=this.nompatient.bind(this)
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
    componentDidMount() {
        this.nompatient()
    }
    onSubmit(values) {
        let analyse = {
            glycémie: values.Glycémie,
            tension: values.Tension,
            choléstérol: values.Choléstérol,
            transaminases: values.Transaminases,
            medecin_traitant : values.medecin_traitant
        }
        console.log(this.state.idmecin , this.state.id)
        PatientService.othmane4(this.state.id, analyse)
        this.setState({notenregitre: true})
        console.log('hrhrh')
        setTimeout(this.bni,
            3000
        )
    }

    bni(){
        this.props.history.push(`/med/${this.state.idmecin}/listeanalyse/${this.state.id}`)
    }
    render() {


        let {  Glycémie,Tension,Choléstérol,Transaminases, medecin_traitant } = this.state
    
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Patient: {this.state.nom} {this.state.prenom}</div>
               
                <div className="container" style={{paddingTop:"50px",borderRadius: "10px",position: "absolute",width:"900px", left:"250px",top: "200px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "480px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ Glycémie,Tension,Choléstérol,Transaminases, medecin_traitant}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Taux de glycémie</label>
                                        <Field className="form-group" type="text" name="Glycémie" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "53px", width: "400px"}} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Tension artérielle</label>
                                        <Field className="form-group" type="text" name="Tension" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "51px", width: "400px"}}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Taux de Choléstérol </label>
                                        <Field className="form-group" type="text" name="Choléstérol" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "43px", width: "400px"}}/>
                                    </fieldset>  <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Taux de Transaminases </label>
                                        <Field className="form-group" type="text" name="Transaminases" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "32px", width: "400px"}}/>
                                    </fieldset>  <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",color:"#4997D4"}}>Médecin traitant</label>
                                        <Field className="form-group" type="text" name="medecin_traitant" style={{borderRadius: "5px",borderColor:"rgba(215, 215, 215, 1)",height:"40px",position: "relative",left: "57px", width: "400px"}}/>
                                    </fieldset>
                                   
                                    
                                    <button   className="btn btn-success" type="submit" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px",position: "absolute",left:"390px",top: "420px"}}>Enregistrer</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
                <br/><br/>
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

export default Ajouteranalyse