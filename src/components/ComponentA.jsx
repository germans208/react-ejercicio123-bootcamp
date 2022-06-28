import React from 'react'
import { Contact } from '../models/contact.class'
import ComponentB from './ComponentB';
import PropTypes from 'prop-types'

const ComponentA = ({ contact }) => {

    //const newContact = new Contact('German', 'Settino', 'german.settino@gmail.com', false);

    return (
        <div>
            <div>
                Contacto:
            </div>
            <div>
                Nombre: {contact.name}
            </div>
            <div>
                Apellido: {contact.surname}
            </div>
            <div>
                Email: {contact.email}
            </div>
            <ComponentB status={true} />
        </div>
    )
}

ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ComponentA
