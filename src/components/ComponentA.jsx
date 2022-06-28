import React from 'react'
import { Contact } from '../models/contact.class'
import ComponentB from './ComponentB';

const ComponentA = (props) => {

    const newContact = new Contact('German', 'Settino', 'german.settino@gmail.com', false);

    return (
        <div>
            <div>
                Contacto:
            </div>
            <ComponentB contact={newContact} />
        </div>
    )
}

export default ComponentA
