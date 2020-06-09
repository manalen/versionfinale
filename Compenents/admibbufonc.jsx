
import React , {Component} from 'react';
import PatientService from './PatientService'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Medecin from './Medecin';
import ListePatient from './ListePatient'
class admibbufonc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: [],
            message: null,
    
            spec:this.props.match.params.spec,
            idadmin: this.props.match.params.id,
          
        }
    }
    componentDidMount() {
        PatientService.amine1(this.state.spec)
        .then(
            response => {
                this.setState({ admin: response.data })
            }
        )
        
        
    }
    modifiermedecin(med){
        this.props.history.push(`/admin/${this.state.idadmin}/modifadm/${med}`)

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
                                    <th>Nom du admin</th>
                                    <th>Prenom du admin</th>
                                  
                                    <th>Fonction</th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                        
                                      
                                    
                                   


                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.admin.map(
                                        medecin =>
                                        <tr key={medecin.idadmin}>
                                            <td>{medecin.nom}</td>
                                            <td>{medecin.prenom}</td>
                                         
                                            <td>{medecin.fonction}</td>
                                            <td><button className="btn btn-success" onClick={() => this.modifiermedecin(medecin.idadmin)}>modifier </button></td>
                                            <td><button className="btn btn-success" onClick={() => this.supprimermedecin(medecin.idadmin)}>supprimer </button></td>

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
export default admibbufonc