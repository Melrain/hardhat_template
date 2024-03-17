import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();

if (!process.env.ALCHEMY_RPC_URL || !process.env.TESTNET_PRIVATE_KEY) {
  throw new Error(
    'Please set your ALCHEMY_RPC_URL and TESTNET_PRIVATE_KEY in a .env file'
  );
}

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },
};

export default config;
