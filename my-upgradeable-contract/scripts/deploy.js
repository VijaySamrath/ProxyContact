const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const proxy = await upgrades.deployProxy(BoxV1, [10, 2],{initializer:'initialize'});
  await proxy.deployed();

  console.log(proxy.address);
}

main();