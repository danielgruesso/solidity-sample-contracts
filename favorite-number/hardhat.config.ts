import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv"
dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "devnet",
  solidity: "0.8.24",
  networks: {
    // hardhat: {},
    devnet: {
      url: "https://devnet.coti.io/rpc",
      chainId: 13068200,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  paths:{
    sources: "./contracts", // Source directory for Solidity files
    tests: "./test-hardhat", // Directory for test files
    cache: "./cache", // Directory for cache files
    artifacts: "./artifacts" // Directory for compiled artifact
  }
}

export default config
