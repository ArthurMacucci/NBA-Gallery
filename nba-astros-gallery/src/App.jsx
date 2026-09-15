import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import LeBron_James from './assets/LeBron_James.jpg';
import SC from './assets/steph_curry.webp';
import GA from './assets/giannis.webp';
import LD from './assets/luka_doncic.avif';
import NJ from './assets/nikola_jokic.webp';
import JT from './assets/jayson_tatum.webp';

const jogadoresIniciais = [
  { id: 1, nome: "LeBron James", foto: LeBron_James },
  { id: 2, nome: "Stephen Curry", foto: SC },
  { id: 3, nome: "Giannis Antetokounmpo", foto: GA },
  { id: 4, nome: "Luka Dončić", foto: LD },
  { id: 5, nome: "Nikola Jokić", foto: NJ },
  { id: 6, nome: "Jayson Tatum", foto: JT },
];

function App() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    setJogadores(jogadoresIniciais);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="grid">
        {jogadores.map((jogador) => (
          <Card key={jogador.id} nome={jogador.nome} foto={jogador.foto} />
        ))}
      </main>
    </div>
  );
}

export default App;
