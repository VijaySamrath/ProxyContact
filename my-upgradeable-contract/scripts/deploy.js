const { ethers, upgrades } = require("hardhat");

async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  const proxy = await upgrades.deployProxy(Storage, [12]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();