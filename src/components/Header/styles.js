import styled from 'styled-components';

export const Header = styled.header`
  background-color: #048f44;
  width: calc(100% - 72px);
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  justify-content: space-between;
  padding: 24px 36px 24px 36px;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BtnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff33;
  border-radius: 8px;
  position: relative;
  width: 54px;
  height: 42px;
  padding: 0 12px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background-color: #006b31;
  margin-right: 16px;
  left: -12px;
  z-index: 100;
  position: absolute;

  &:first-child {
    margin-right: auto;
  }
`;

export const UserIcon = styled.img`
  color: #218838;
  width: 24px;
  height: 24px;
`;

export const SettingsIcon = styled.img`
  color: #fff;
  width: 24px;
`;

export const SaldoValue = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 26px;
  line-height: 31.2px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const ViewSaldo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
