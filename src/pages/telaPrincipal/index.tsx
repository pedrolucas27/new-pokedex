import { Row, Col } from "antd";

import CardPokemon from "./components/cardPokemon";
import { Pokemon } from "../../@types/pokemon";

import "./index.css";

const App = (): JSX.Element => {
  const lista: Pokemon[] = [
    {
      img: "",
      cod: "001",
      nome: "Bulbasaur",
      caracteristicas: ["Grass", "Poison"],
    },
    {
      img: "",
      cod: "002",
      nome: "Charmander",
      caracteristicas: ["Fire"],
    },
    {
      img: "",
      cod: "003",
      nome: "Blastoise",
      caracteristicas: ["Water"],
    },
    {
      img: "",
      cod: "004",
      nome: "Ivysaur",
      caracteristicas: ["Grass", "Poison"],
    },
  ];

  return (
    <div className="container-main">
      <h1>Cabeçalho</h1>
      <div className="container-list">
        <Row gutter={[14, 14]} className="row">
          {lista.map((item) => (
            <Col span={6}>
              <CardPokemon objeto={item} key={item.cod} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default App;
