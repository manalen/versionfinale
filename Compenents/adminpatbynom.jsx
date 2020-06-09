
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientService from './PatientService';

class adminpatbynom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medecin: [],
            message: null,
            nom:this.props.match.params.nom,
            prenom:this.props.match.params.prenom,
            idadmin: this.props.match.params.idmed,
          
        }
    }
    componentDidMount() {
        PatientService.namola(this.state.nom,this.state.prenom)
        .then(
            response => {
                this.setState({ medecin: response.data })
            }
        )
        
        
    }
    modifiermedecin(med){
        this.props.history.push(`/admin/${this.state.idadmin}/modifpat/${med}`)

    }
    supprimermedecin(med){
        PatientService.amine4(med);
        
        setTimeout(this.to,
           6000
        )

    

        

    }
    

    render() {
        return (
        <div>
            
            <div className="onglets" style={{borderRadius: "10px",width: "1500px",height:"480px",position: "absolute", left:"50px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">
                    <Tab eventKey="infosperso" title="Informations personnelles">
                        <div style={{borderRadius: "10px",width: "1100px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                            <table className="table" >
                                <thead>
                                    <tr>
                                    <th>Nom  </th>
                                    <th>Prenom  </th>
                                   
                                    <th>bum de serie </th>
                                    <th>age </th>
                                    <th>cin  </th>                                    
                                    <th>adresse </th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                        
                                      
                                    
                                   


                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.medecin.map(
                                        patient =>
                                        <tr key={patient.idpatient}>
                                            <td>{patient.nom}</td>
                                            <td>{patient.prenom}</td>
                                            <td>{patient.numserie}</td>
                                            <td>{patient.cin}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.adresse}</td>
                                            <td><button className="btn btn-success" onClick={() => this.modifiermedecin(patient.idpatient)}>modifier </button></td>
                                            <td><button className="btn btn-success" onClick={() => this.supprimermedecin(patient.idpatient)}>supprimer </button></td>

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
export default adminpatbynom