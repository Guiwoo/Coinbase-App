import {useEffect, useState} from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Transfer from "./Transfer";
import {TailSpin} from "react-loader-spinner";
import Receive from "./Receive";

const TransferModal = ({sanityTokens, thirdWebTokens, walletAddress}) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);
  const unSelectStyle = {
    border: "1px solid #282b2f",
  };
  const selectStyle = {
    color: "#3773f5",
  };
  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "receive":
        return (
          <Receive
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "transfering":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <h2>Transferring...</h2>
            <TailSpin
              heigth="100"
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </div>
        );
      case "transfered":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            Complete
          </div>
        );
      default:
        return <h2>Send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectStyle : unSelectStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectStyle : unSelectStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
