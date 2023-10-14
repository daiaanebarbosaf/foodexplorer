import { Container } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

export function Ingredients({ title, isnew, value, onClick, ...rest}){
    return(
        <Container isnew={isnew}>
           <input
                type="text"
                value={value}
                readOnly={!isnew}
                {...rest}
           />
           
           <button
                type="button"
                onClick={onClick}
                className={isnew ? 'button-delete' : 'button-add'}
           >
            {title} 
            {isnew ? <FiPlus/> : <FiX/>}
           </button>
        </Container>
    );
}