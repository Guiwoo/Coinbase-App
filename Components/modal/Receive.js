import {client} from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import {BiCopy} from "react-icons/bi";
import {FaCheck} from "react-icons/fa";
import {useEffect, useState} from "react";
import styled from "styled-components";

const Receive = ({setAction, selectedToken, walletAddress}) => {
  const [imgUrl, setImgUrl] = useState("");
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImgUrl(url);
  }, [selectedToken]);

  return (
    <Wrapper>
      <Content>
        <QRContainer>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt=""
          />
        </QRContainer>
        <Divider />
        <Row>
          <CoinSeletList>
            <Icon>
              <img src={imgUrl} alt="" />
            </Icon>
            <CoinName>{selectedToken.name}</CoinName>
          </CoinSeletList>
        </Row>
        <Divider />
        <Row>
          <div>
            <Title>{selectedToken.symbol} Address</Title>
            <Address>{walletAddress}</Address>
          </div>
          <CopyBtn
            onClick={() => {
              navigator.clipboard.writeText(walletAddress);
              setCopy(true);
            }}
          >
            {copy ? <FaCheck style={{color: "#27ad75"}} /> : <BiCopy />}
          </CopyBtn>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default Receive;

const Wrapper = styled.div`
  height: 100%;
`;
const Content = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const QRContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  font-size: 1.2rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`;

const CoinSeletList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  flex: 1;
  border: none;
  outline: none;
  color: white;
  font-size: 1.3rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const Title = styled.div`
  color: white;
  margin-bottom: 0.5rem;
`;

const Address = styled.div`
  font-size: 0.8rem;
`;
const CopyBtn = styled.div`
  cursor: pointer;
`;
