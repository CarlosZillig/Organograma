import { RiChatDeleteLine } from 'react-icons/ri'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
    <div className="colaborador">
        <RiChatDeleteLine 
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)} 
            />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                 ? <MdFavorite onClick={favoritar}/> 
                 : <MdFavoriteBorder onClick={favoritar}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador