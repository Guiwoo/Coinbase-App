import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../static/coins";
import CoinComponent from "./Coin";
import BalanceChart from "./Balance";
import { useEffect, useState } from "react";

const Portfolio = ({ walletAddress, sanityTokens, thirdWebToken }) => {
  const [wallet, setWallet] = useState(0);
  const tokenToUsd = {};

  for (let token of sanityTokens) {
    tokenToUsd[token.contractAddress] = Number(token.usdPrcie);
  }

  useEffect(() => {
    const calTotal = async () => {
      const total = await Promise.all(
        thirdWebToken.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          return Number(balance.displayValue) * tokenToUsd[token.address];
        })
      );
      setWallet(total.reduce((a, b) => a + b, 0));
    };
    return calTotal();
  }, [thirdWebToken, sanityTokens]);
  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio Balance</BalanceTitle>
              <BalanceValue>
                {"$"}
                {wallet.toLocaleString()}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <th style={{ flex: 3 }}>Name</th>
                <th style={{ flex: 2 }}>Balance</th>
                <th style={{ flex: 1 }}>Price</th>
                <th style={{ flex: 1 }}>Allocation</th>
                <th style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </th>
              </TableRow>
            </TableItem>
            <Divider />
            <>
              {coins.map((coin, index) => (
                <tbody key={index}>
                  <CoinComponent coin={coin} />
                  <Divider />
                </tbody>
              ))}
            </>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
