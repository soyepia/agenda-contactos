import React, { Component } from 'react'
import '../App.css'

export default class ContactoForm extends Component {
    
    state = {
        nombre: '',
        numero: '',
        email: ''
    }
    
    onSubmit = (e) => {
        this.props.addContacto(this.state.nombre, this.state.numero, this.state.email);
        e.preventDefault();
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container contcart">
                
                <h1 className="display-5 h1">Contactos</h1>
                <br/>

                <form className="form-inline " onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label>Nome</label>
                    <input type="text" 
                    className="form-control agrainput" 
                    name="nombre"
                    id="Nombre" 
                    onChange={this.onChange}
                    value={this.state.nombre}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Telefone</label>
                    <input type="text" 
                    className="form-control agrainput" 
                    name="numero"
                    id="Numero"
                    onChange={this.onChange}
                    value={this.state.numero}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Email</label>
                    <input type="text" 
                    className="form-control agrainput" 
                    name="email"
                    id="exampleInputEmail" 
                    onChange={this.onChange}
                    value={this.state.email}/>
                </div>

                <button type="submit" nome="submit" className="btn btn-primary mb-3 BtmEnvial">Guardar</button>
                

                </form>

            </div>
        )
    }
}
