import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fond from './fond.jpeg';
import PatientService from './PatientService';
import u132 from './u132.png';
class Authentification extends Component{
    constructor(props){
        super(props)
        this.state={
            username : '',
            password : '',
            medecin:null,
            hasLoginFailed: false,
            showSuccessMessage: false,
            value : false
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.loginClicked1=this.loginClicked1.bind(this)
        this.loginClicked2=this.loginClicked2.bind(this)
         this.chni=this.chni.bind(this)
         this.bni=this.bni.bind(this)

       
    }

    
    

    handleUsernameChange(event){
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePasswordChange(event){
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    bni(){
        PatientService.genova(this.state.username,this.state.password)
            .then(
                response => {
                    
                    this.setState({ medecin:  response.data })
                    console.log(this.state.medecin)
                    if(this.state.medecin.idadmin!= null){
                        this.setState({value: true})
                    }
                }
                
                )
                setTimeout(this.loginClicked2,
                    3000
                )

    }
    chni(){
        PatientService.ibola(this.state.username,this.state.password)
            .then(
                response => {
                    
                    this.setState({ medecin:  response.data })
                    console.log(this.state.medecin)
                    if(this.state.medecin.idmedecin!= null){
                        this.setState({value: true})
                    }
                }
                
                )
                setTimeout(this.loginClicked1,
                    3000
                )
                
            
       

    }
   
        
    loginClicked1(){
       
        if(this.state.value == true){
            
            

          
            this.props.history.push(`/medecin/${this.state.medecin.idmedecin}`)

    
            this.setState({showSuccessMessage: true})
         
            this.setState({hasLoginFailed: false})
           
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    loginClicked2(){
        if(this.state.value == true){
            this.props.history.push(`/admin/${this.state.medecin.idadmin}/listemedecin`)
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
            
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }

    }
    
    render(){
        return (
            <div>
                <img id="u1_img" class="img " src={fond} style={{position:"relative",left:"400px"}}/>
                <div id="u128" className="ax_default" data-label="Menu" data-left="0" data-top="0" data-width="0" data-height="0">
                    <div id="u129" className="ax_default" data-label="Menu">
                        <div id="u129_state0" className="panel_state" data-label="State1" >
                            <div id="u129_state0_content" className="panel_state_content">
                                <div id="u130" className="ax_default box_2">
                                    <div id="u130_div" className=""></div>
                                    <div id="u130_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div data-label="Navigation"  id="u129">
                    <Navbar bg="light" expand="lg" style={{height:"50px"}}>
                        <Navbar.Brand href="/"><img id="u132_img" className="img " src={u132}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/#u115"><span id="u133">Présentation</span></Nav.Link>
                                <Nav.Link href="/#u97"><span id="u134">Equipe</span></Nav.Link>
                                <Nav.Link href="/#u1"><span id="u131">Contact</span></Nav.Link>
                                <Nav.Link href="/#u106"><span id="u137">Spécialités</span></Nav.Link>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",padding:"30px",marginTop: "40px",width: "435px",heigh:"410",position: "absolute", left:"70px",top: "130px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
               
                
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}  />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <label id="u18_input_label" for="u18_input" style={{position: "absolute", left: "0px"}}>
                        <div id="u18_text" className="text " style={{position:"relative",left:"30px"}}>
                            <input id="u18_input" type="checkbox" value="checkbox" />Se souvenir de moi
                        </div>
                    </label>
                    
                    <div id="u19_text" class="text ">
                    
                        <p><span style={{color:"#3C90D1", position:"relative",left:"200px"}}>Mot de passe oublié?</span></p>
                    </div>
                   
                    
                    
                    
                    <button onClick={this.chni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}}>MEDECIN </button>
                    <button  onClick={this.bni} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",position:"relative",left:"100px"}}>ADMIN </button>

                    <ErreurAuthentif hasLoginFailed={this.state.hasLoginFailed}/>
                    <SuccesAuthentif showSuccessMessage={this.state.showSuccessMessage}/>   
                </div>

            </div>
        )
    }

}
function ErreurAuthentif(props){
    if (props.hasLoginFailed){
        return <div>Le nom d'utilisateur ou le mot de passe sont érronés</div>
    }
    return null
}
function SuccesAuthentif(props){
    if (props.showSuccessMessage){
        return <div>Vous êtes connecté</div>
    }
    return null
}

export default Authentification