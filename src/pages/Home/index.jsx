import { useState } from 'react';
import Header from '../../components/Header/header';
import * as C from './styles';

const Home = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [saldo, setSaldo] = useState(1204.35);

  return (
    <C.Container>
      <Header />
    </C.Container>
  );
};

export default Home;
