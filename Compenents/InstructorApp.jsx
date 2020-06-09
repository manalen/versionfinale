import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acceuil from './Acceuil';
import admibbufonc from './admibbufonc';
import Admin from './Admin';
import Adminbynom from './Adminbynom';
import adminpatbunum from './adminpatbunum';
import adminpatbycin from './adminpatbycin';
import adminpatbynom from './adminpatbynom';
import Affichebycin from './Affichebycin';
import Afficherbynomprenom from './Afficherbynomprenom';
import Afficherbynum from './Afficherbynum';
import Affichermedbyname from './Affichermedbyname';
import Affichermedbyspec from './Affichermedbyspec';
import AfficherPatient1 from './AfficherPatient1';
import ajouteradm from './ajouteradm';
import Ajouteranalyse from './Ajouteranalyse';
import Ajouterconsu from './Ajouterconsu';
import ajouterdv from './ajouterdv';
import Ajoutermed from './Ajoutermed';
import Ajouterpres from './Ajouterpres';
import Authentification from './Authentification';
import Carousel2 from './Carousel';
import FAQ from './FAQ';
import Formulaire from './Formulaire';

import ListeAdmin from './ListeAdmin';
import ListeAnalyse from './ListeAnalyse';
import ListeConsultation from './ListeConsultation';
import listepat from './listepat';
import ListePrescritpion from './ListePrescription';
import Listerdv from './Listerdv';
import Medecin from './Medecin';
import Modifadm from './Modifadm';
import Modifiermed from './Modifiermed';
import Modifpat from './Modifpat';
import qu1 from './qu1';
import qu2 from './qu2';
import qu3 from './qu3';
import qu4 from './qu4';
import qu5 from './qu5';
import rdvbynum from './rdvbynum';









function ErrorComponent() {
    return <div>Erreur, le lien entré n'est pas disponible!</div>
}
class InstructorApp extends Component {
    
    render() {
        return (
            <Router>
            <>
                <Switch>
                <Route path="/admin/:id/listemedecin" exact component={Admin} />
                    <Route path="/login" exact component={Authentification} />
                    <Route path="/" exact component={Acceuil} />
                    <Route path="/med/:idmed/listeconsultation/:id" exact component={ListeConsultation} />
                   
                    <Route path="/med/:idmed/listeprescription/:id" exact component={ListePrescritpion} />
                    <Route path="/med/:idmed/listeanalyse/:id" exact component={ListeAnalyse} />
                    <Route path="/patients/:id" component={AfficherPatient1} /> 
                    <Route path="/med/:idmed/patientsbycin/:cin" component={Affichebycin} />
                    <Route path="/med/:idmed/patientsbynum/:num" component={Afficherbynum} />
                    <Route path="/med/:idmed/patientsbyname/:nom/:prenom" component={Afficherbynomprenom} />
                    <Route path="/admin/:id/medbyname/:nom/:prenom" component={Affichermedbyname} />
                    <Route path="/admin/:id/adminbyfonc/:spec" component={admibbufonc} />
                    <Route path="/admin/:id/medbyspec/:spec" component={Affichermedbyspec} />
                    <Route path="/admin/:id/adminbyname/:nom/:prenom" component={Adminbynom} />
                    <Route path="/ajouter" component={Formulaire}/>
                    <Route path="/medecin/:id" component={Medecin}/>
                    <Route path="/admin/:idadmin/ajoutermed" component={Ajoutermed} />
                    <Route path="/admin/:idadmin/ajouterrdv" component={ajouterdv} />
                    <Route path="/admin/:idamdin/modifmed/:id" component={Modifiermed} />
                    <Route path="/admin/:id/listeadmin"  component={ListeAdmin} />
                    <Route path="/admin/:id/listerdv"  component={Listerdv} />
                    <Route path="/admin/:id/listerdv/:num"  component={rdvbynum} />
                    <Route path="/admin/:id/ajouterad" component={ajouteradm} />
                    <Route path="/admin/:id/modifadm/:id1" component={Modifadm} />
                    <Route path="/admin/:id/modifpat/:id1" component={Modifpat} />
                    <Route path="/admin/:id/listepatient"  component={listepat} />
                    <Route path="/admin/:idmed/patientsbycin/:cin" component={adminpatbycin} />
                    <Route path="/admin/:idmed/patientsbynum/:num" component={adminpatbunum} />
                    <Route path="/admin/:idmed/patientsbyname/:nom/:prenom" component={adminpatbynom} />
                    


                    <Route path="/med/:idmed/ajouterconsultation/:id" component={Ajouterconsu} />
                    <Route path="/med/:idmed/ajouterprescription/:id" component={Ajouterpres} />
                    <Route path="/med/:idmed/ajouteranalyse/:id" component={Ajouteranalyse} />
                    <Route path="/faq" component={FAQ}/>
                    <Route path="/qu1" component={qu1}/>
                    <Route path="/qu2" component={qu2}/>
                    <Route path="/qu3" component={qu3}/>
                    <Route path="/qu4" component={qu4}/>
                    <Route path="/qu5" component={qu5}/>
                    <Route path="/  " component={Carousel2}/>
                    <Route path="" component={ErrorComponent}/>
              
                    
                </Switch>
            </>
        </Router>
        )
    }
}

export default InstructorApp