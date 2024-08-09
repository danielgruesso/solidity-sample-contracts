const { ethers } = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  // Get the contract to deploy
  const ContractFactory = await ethers.getContractFactory("FavoriteNumber");
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
