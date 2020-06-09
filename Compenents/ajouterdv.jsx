import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import PatientService from './PatientService';


class ajouterdv extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
           
       
            id : this.props.match.params.idadmin,
            date :'',

         
            notenregitre: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.bni = this.bni.bind(this)
    }
    componentDidMount() {
    }
    onSubmit(values) {
        let rdv = {
          
            date : values.date
          
        }
      
        PatientService.ajouterdv(rdv)
        this.setState({notenregitre: true})
        setTimeout(this.bni,
            3000
        )
        
      


    }
    bni(){
        this.props.history.push(`/admin/${this.state.id}/listerdv`)
    }
    render() {


        let {  date} = this.state
    
        return (
            <div>
                <h3>Consultation  </h3>
                <div className="container" style={{borderRadius: "10px",position: "absolute",width:"1000px", left:"90px",top: "50px",borderStyle: "ridge",borderColor: "#D7D7D7",height: "700px", boxShadow:"10px 10px 5px grey"}}>
                    <Formik
                        initialValues={{ date}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>date</label>
                                        <Field className="form-group" type="date" name="date" style={{position: "relative",left: "12px", width: "635px"}} />                                    </fieldset>
                                   
                                    <button   className="btn btn-success" type="submit" style={ {height: "50px   ",position: "absolute",width:"50px",left:"450px",top: "500px"}}>Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }
}

export default ajouterdv