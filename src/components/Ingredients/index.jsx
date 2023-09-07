import { Container } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

export function Ingredients({ isNew, value, onClick, ...rest}){
    return(
        <Container>
           <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
           /> 
        </Container>
    )
}