import axios from 'axios' 



class PatientService {

    
    hola() {
        return axios.get(`https://manaltest.herokuapp.com/admin/showallpatient`);
    }
    bola(id ){
        
        return axios.get( `https://manaltest.herokuapp.com/med/showpatientbyid/${id}`);
    }
    cinola(cin){
        return axios.get( `https://manaltest.herokuapp.com/med/showpatientbycin/${cin}`);
    }
    numola(num){
        return axios.get( `https://manaltest.herokuapp.com/med/showpatientbynum/${num}`);

    }
    namola(nom,prenom){
        return axios.get( `https://manaltest.herokuapp.com/med/showpatientbynomprenom/${nom}/${prenom}`);
    }
    kola(id){
        return axios.get(`https://manaltest.herokuapp.com/medecin/afficherprescriptionpatient/${id}` );
    } 
    ola( kaman){
        
        return axios.get(`https://manaltest.herokuapp.com/med/showpatientbyid/${kaman}`);

    }
    
    icola(medid , patientid,consultation){
        return axios.post( `https://manaltest.herokuapp.com/med/${medid}/addconsu/${patientid}`,consultation);

    }
    ibola(log,pass){
        return axios.get( `https://manaltest.herokuapp.com/lookformedecin/${log}/${pass}`);

    }
    genova(log,pass){
        return axios.get( `https://manaltest.herokuapp.com/lookforadmin/${log}/${pass}`);

    }
    yolo( ){
        
        return axios.get(`https://manaltest.herokuapp.com/admin/showallmed`);

    }
    othmane(num){
        return axios.get( `https://manaltest.herokuapp.com/med/showconsuparid/${num}`);
    }
    othmane1(num){
        return axios.get( `https://manaltest.herokuapp.com/med/shwomedconsu/${num}`);
    }
    othmane2(num){
        return axios.get( `https://manaltest.herokuapp.com/med/showpresid/${num}`);
    }
    othmane3(num){
        return axios.get( `https://manaltest.herokuapp.com/med/showmedpresc/${num}`);
    }
    kmo(medid , patientid,prescription){
        return axios.post( `https://manaltest.herokuapp.com/med/${medid}/addpres/${patientid}`,prescription);

    }
    othmane4( patientid,analyse){
        return axios.post( `https://manaltest.herokuapp.com/med/addanalyse/${patientid}`,analyse);

    }
    othmane5(num){
        return axios.get( `https://manaltest.herokuapp.com/med/showanal/${num}`);
    }
    manal(nom,prenom){
        return axios.get( `https://manaltest.herokuapp.com/admin/showmedecinbynomprenom/${nom}/${prenom}`);
    }
    manal1(spec){
        return axios.get( `https://manaltest.herokuapp.com/admin/showmedbyspec/${spec}`);
    }
    manal2(medecin){
        return axios.post( `https://manaltest.herokuapp.com/admin/addmed`,medecin);
    }
    manal3(medecin){
        return axios.get( `https://manaltest.herokuapp.com/admin/findmedbyid/${medecin}`);
    }
    manal4(medecin){
        return axios.delete(`https://manaltest.herokuapp.com/admin/deletemed/${medecin}`)
    }
    amine(nom,prenom){
        return axios.get( `https://manaltest.herokuapp.com/admin/showadminbynomprn/${nom}/${prenom}`);
    }
    amine1(spec){
        return axios.get( `https://manaltest.herokuapp.com/admin/showadmbyfonc/${spec}`);
    }
    amine2(medecin){
        return axios.post( `https://manaltest.herokuapp.com/admin/addadmin`,medecin);
    }
    amine3(medecin){
        return axios.get( `https://manaltest.herokuapp.com/med/showpatientbyid/${medecin}`);
    }
    amine4(medecin){
        return axios.delete(`https://manaltest.herokuapp.com/admin/deleteadmin/${medecin}`)
    }
    amine5(){
        return axios.get( `https://manaltest.herokuapp.com/admin/showalladmin`);
    }
    amine7(patient){
        return axios.post( `https://manaltest.herokuapp.com/admin/addpatient`,patient);
    }
    amine6(id){
        return axios.get( `https://manaltest.herokuapp.com/admin/findadmin/${id}`);
    }
       showallrdv(){
        return axios.get( `http://localhost:5000/admin/showallrdv`);
       }
    showmedrdv(){
        return axios.get( `http://localhost:5000/admin/showmedrdv`);
    }
    showpatrdv(){
        return axios.get( `http://localhost:5000/admin/showpatrdv`);
    }
    ajouterdv(medid , patientid,rdv){
        return axios.post( `http://localhost:5000/admin/55/addrdv/12`,rdv);
    }
    findrdvbynumserie(id){
        return axios.get( `http://localhost:5000/admin/findrdvbynumpati/${id}`);
    }
    medrdvnum(id){
        return axios.get( `http://localhost:5000/admin/medrdvnum/${id}`);
    }



}

export default new PatientService()
