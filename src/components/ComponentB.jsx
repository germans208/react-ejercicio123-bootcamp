import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const ComponentB = ({ contact }) => {
    const [connected, setConnected] = useState(contact.connected);

    return (
        <div>
            <div>
                Nombre: {contact.name}
            </div>
            <div>
                Apellido: {contact.surname}
            </div>
            <div>
                Email: {contact.email}
            </div>
            <h2>
                {(contact.connected) ? `Contacto En Línea` : `Contacto No Disponible`}
                <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectado' : 'Desconectado'}</button>
            </h2>
        </div>
    )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB;
