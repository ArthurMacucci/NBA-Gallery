function Card({ nome, foto }) {
  return (
    <div className="card">
      <img src={foto} alt={nome} />
      <h3>{nome}</h3>
    </div>
  );
}

export default Card;
