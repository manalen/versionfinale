
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PatientService from './PatientService';
class Affichermedbyname extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medecin: [],
            message: null,
            nom:this.props.match.params.nom,
            prenom:this.props.match.params.prenom,
            id: this.props.match.params.id     ,
           
          
        }
    }
    componentDidMount() {
        PatientService.manal(this.state.nom,this.state.prenom)
        .then(
            response => {
                this.setState({ medecin: response.data })
            }
        )
        
        
    }
    modifiermedecin(med){
        this.props.history.push(`/admin/${this.state.id}/modifmed/${med}`)

    }
    supprimermedecin(med){
        PatientService.manal4(med);
        
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
                                    <th>Nom du médecin</th>
                                    <th>Prenom du médecin</th>
                                  
                                    <th>Spécialité</th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                        
                                      
                                    
                                   


                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.medecin.map(
                                        medecin =>
                                        <tr key={medecin.id}>
                                            <td>{medecin.nom}</td>
                                            <td>{medecin.prenom}</td>
                                         
                                            <td>{medecin.spécialité}</td>
                                            <td><button className="btn btn-success" onClick={() => this.modifiermedecin(medecin.idmedecin)}>modifier </button></td>
                                            <td><button className="btn btn-success" onClick={() => this.supprimermedecin(medecin.idmedecin)}>supprimer </button></td>

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
export default Affichermedbyname