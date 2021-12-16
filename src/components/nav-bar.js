import React, { Component } from 'react'

import "../index.css"

class Navbar extends Component {

    state = {
        busqueda: '',
        contactos: this.props.contactos
    }

    onSubmit = (e) => {
        console.log(this.state.busqueda)
        this.props.searchContacto(this.state.busqueda)
        e.preventDefault();
    }

    onChange = async (e) => {
        e.persist();
        console.log(e.target.name, e.target.value)
        await this.setState({
            busqueda: e.target.value,
            [e.target.name]: e.target.value
        })
        this.props.searchContacto(this.state.busqueda)
        
    }

    render() {
        
        
        return <div className="container">
            <nav className="navbar navbar-dark nav">
            
            <span className="navbar-brand mb-0 h1">Agenda</span>
            
            <form className="form-inline" onSubmit={this.onSubmit}>
            <input className="form-control mr-sm-2" 
            type="search" 
            placeholder="Buscar Contactos"
            name="busqueda"
            onChange={this.onChange} 
            aria-label="Search"/>
            </form>

            </nav>
        </div>
    }
}

export default Navbar;