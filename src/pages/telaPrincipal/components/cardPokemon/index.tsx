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
          <img src={objeto.img} />
        </Col>
        <Col span={24}>
          <Typography.Text>N {objeto.num}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Title level={4}>{objeto.name}</Typography.Title>
        </Col>
        <Col span={24}>
          {objeto.type.map((nomeCaracteristica, index) => (
            <Tag color="magenta" key={index}>
              {nomeCaracteristica}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default CardPokemon;
