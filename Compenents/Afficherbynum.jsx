
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientService from './PatientService';
class Afficherbynum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: [] ,
            Consultations:[] ,
            Prescriptions: [] ,
            message: null,
            num: this.props.match.params.num,
            idmed: this.props.match.params.idmed
        }
    }

    componentDidMount() {
        PatientService.numola(this.state.num)
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
    render() {
        return ( 
        <div>
             <div className="onglets" style={{borderRadius: "10px",width: "1500px",height:"480px",position: "absolute", left:"50px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">
                    <Tab eventKey="infosperso" title="Informations personnelles">
                        <div style={{borderRadius: "10px",width: "1000px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                           <table className="table" >
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
                                    this.state.patient.map(
                                        patients =>
                                        <tr key={patients.idpatient}>
                                            <td>{patients.nom}</td>
                                            <td>{patients.prenom}</td>
                                            <td>{patients.numserie}</td>
                                            <td>{patients.cin}</td>
                                            <td>{patients.age}</td>
                                            <td>{patients.adresse}</td>
                                            <td><button className="btn btn-success" onClick={() => this.afficherconsultation(patients.idpatient)}>Afficher </button></td>
                                              <td><button style={{height:"5",width:"5"}} className="btn btn-success" onClick={() => this.afficherprescription(patients.idpatient)}>Afficher </button></td>
                                         
                                              <td><button style={{height:"5",width:"5"}} className="btn btn-success" onClick={() => this.afficheranalyse(patients.idpatient)}>Afficher </button></td>
                                    
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
        </div>
        )
        }    
    }
export default Afficherbynum