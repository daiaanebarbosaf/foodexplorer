import { Container } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

export function Ingredients({ isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
           <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
           /> 

           <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-delete' : 'button-add'}
           >

            {isNew ? <FiPlus/> : <FiX/>}
           </button>
        </Container>
    )
}