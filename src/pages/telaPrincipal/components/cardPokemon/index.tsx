import { Card, Col, Row, Tag, Typography } from "antd";
import { Pokemon } from "../../../../@types/pokemon";

import "./index.css";

interface CardPokemonPros {
  objeto: Pokemon;
}

const CardPokemon = ({ objeto }: CardPokemonPros): JSX.Element => {
  return (
    <Card hoverable>
      <Row>
        <Col span={24} className="conateinr-img">
          <img src="http://www.serebii.net/pokemongo/pokemon/001.png" />
        </Col>
        <Col span={24}>
          <Typography.Text>N {objeto.cod}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Title level={4}>{objeto.nome}</Typography.Title>
        </Col>
        <Col span={24}>
          {objeto.caracteristicas.map((nomeCaracteristica) => (
            <Tag color="magenta">{nomeCaracteristica}</Tag>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default CardPokemon;
