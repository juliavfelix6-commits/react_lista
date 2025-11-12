import banner_1 from '../../assets/banner.png';
import banner_2 from '../../assets/banner.png';
import banner_3 from '../../assets/banner.png';
import camisa_1 from '../../assets/DropDadoCostasPreta.png';
import camisa_2 from '../../assets/DropMaskFrente.png';
import camisa_3 from '../../assets/DropCaveira1.png';
import camisa_4 from '../../assets/DropDadoFrente.png';
import './Produtos.css';
import { useEffect, useState } from 'react';
import { getRoupas } from '../../Services/roupasServices';
import type { Roupas } from '../../types/Roupas';


export default function Produtos(){

    const [ roupas, setRoupas] = useState<Roupas[]>([]);

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

                <div className="card_produtos">

                    <img src={camisa_1} alt="" />

                    <h2>drop lock</h2>

                </div>

                <div className="card_produtos">

                    <img src={camisa_2} alt="" />

                    <h2>mask off
                        black
                    </h2>

                </div>

                <div className="card_produtos">

                    <img src={camisa_3} alt="" />

                    <h2>skull drop
                        white
                    </h2>

                </div>

                <div className="card_produtos">

                    <img src={camisa_4} alt="" />

                    <h2>drop lock
                        white
                    </h2>

                </div>

            </section>

</main>
    )
}