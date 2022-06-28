import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ComponentB = ({ status }) => {
    const [connected, setConnected] = useState(status);

    return (
        <div>
            <h2>
                {(connected) ? `Contacto En Línea` : `Contacto No Disponible`}
                <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectado' : 'Desconectado'}</button>
            </h2>
        </div>
    )
}

ComponentB.propTypes = {
    status: PropTypes.bool,
}

export default ComponentB;
