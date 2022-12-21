interface TituloPros {
  texto: string;
  cor: string;
}

const Titulo = ({ texto, cor }: TituloPros): JSX.Element => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

export default Titulo;
