import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import u132 from './u132.png';

class Ajouterconsu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            observation :'',
            idmecin : this.props.match.params.idmed,
            id : this.props.match.params.id,
            notenregitre: false,
            nom:'',prenom:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
        this.nompatient=this.nompatient.bind(this)
    }
    componentDidMount() {
        this.nompatient()
    }
    onSubmit(values) {
        let consultation = {
            observation: values.observation,
        }
        console.log(this.state.idmecin , this.state.id)
        PatientService.icola(this.state.idmecin, this.state.id,consultation)
        this.setState({notenregitre: true})
        setTimeout(this.bni,
            3000
        )
    }
    bni(){
        this.props.history.push(`/med/${this.state.idmecin}/listeconsultation/${this.state.id}`)
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

    render() {
        let {  observation } = this.state.observation
        return (
            <div>
                <div style={{borderRadius: "10px",width: "350px",height:"40px",position: "absolute", left:"520px",top: "100px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7",backgroundColor:"white",color:"#4997D4", boxShadow:"10px 10px 5px grey"}}>Patient: {this.state.nom} {this.state.prenom}</div>
               
                <div className="container" style={{borderRadius: "10px",position: "absolute",width:"700px", left:"350px",top: "200px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "420px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ observation }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label style={{fontFamily:"cursive",fontSize:"20px"}}>Veuillez saisir votre observation!</label>
                                        <Field className="form-group" type="text" name="observation" style={{position: "absolute",width:"600px",height: "200px", left:"50px",top: "100px"}} />
                                    </fieldset>
                                    <button   className="btn btn-success" type="submit" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",height: "50px   ",position: "absolute",width:"100px",left:"300px",top:"320px"}}>Enregistrer</button>
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
export default Ajouterconsu