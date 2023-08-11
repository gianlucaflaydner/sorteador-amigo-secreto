
import './styles.css';

const Cabecalho = () => {
    return(
        <header className="header">
            <div className="header-logo" role="img" aria-label='Logo do Sorteador'/>
            <img className="header-participante" src="/imagens/participante.png" alt="participante com um presente na mão"/>
        </header>
    )
}

export default Cabecalho;