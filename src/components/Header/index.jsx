import { useState } from 'react';
import * as C from './styles';

const Header = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [saldo, setSaldo] = useState(1204.35);

  return (
    <C.Header>
      <C.Row>
        <img src='/assets/dogdindin.png' alt='Logo Dog' />
        <C.BtnRight>
          <C.IconWrapper>
            <C.UserIcon src='/assets/iconUser.svg' />
          </C.IconWrapper>
          <C.SettingsIcon src='/assets/config.svg' />
        </C.BtnRight>
      </C.Row>
      <C.Row>
        <C.SaldoValue>
          <span>Bem vindo(a) ao DogDindin</span>
          <br />
          {showSaldo
            ? saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            : '----'}
        </C.SaldoValue>
        <C.ViewSaldo onClick={() => setShowSaldo(!showSaldo)}>
          <img src='/assets/eye.svg' alt='Ver Saldo' />
        </C.ViewSaldo>
      </C.Row>
    </C.Header>
  );
};

export default Header;
