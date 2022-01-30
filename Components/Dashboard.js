import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [token, setToken] = useState([]);
  const [thirdWebToken, setThirdWebToken] = useState([]);
  useEffect(() => {
    const getSanityCoins = async () => {
      const coins = await fetch(
        "https://evnpf345.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22coins%22%5D%7B%0A%20%20name%2C%0A%20%20usdPrcie%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const { result } = await coins.json();
      setToken(result);
      setThirdWebToken(
        result.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    return getSanityCoins();
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={token}
          thirdWebToken={thirdWebToken}
        />
        <MainContent
          walletAddress={address}
          sanityTokens={token}
          thirdWebToken={thirdWebToken}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
