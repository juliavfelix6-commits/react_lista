import banner_1 from '../../assets/banner.png';
import banner_2 from '../../assets/banner.png';
import banner_3 from '../../assets/banner.png';
import './Produtos.css';
import { useEffect, useState } from 'react';
import { getRoupas } from '../../Services/roupasServices';
import type { Roupas } from '../../types/Roupas';


export default function Produtos() {

  const [roupas, setRoupas] = useState<Roupas[]>([]);

  const fetchRoupas = async () => {
    try {
      const dados = await getRoupas();
      console.log("Dados retornados da API: ", dados);
      setRoupas(dados);
    } catch (error) {
      console.error("erro ao executar a função getBolos; ", error)
    }
  }

  useEffect(() => {
    fetchRoupas();
  }, [])

  return (
    <main>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner_3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="cards">

       

     
      {
        roupas.map((r: Roupas) => (
          <div className='card_produtos'>
            <img src= {`http://localhost:3000/static/${r.imagens[0]}`} alt={"Imagem do produtos: " + r.descrição} />
            <h2>{r.nome}</h2>
            <p>{r.descrição}</p>
            <span>{r.preco}</span>
          </div>
        ))
      }
       </section>
    </main>
  )
}