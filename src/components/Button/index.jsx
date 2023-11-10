import { Container } from './style'

export function Button({ icon: Icon, title, loading = false, ...rest}) {
    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon />}
            { loading ? 'Carregando...' : title}

        </Container>
    );

}