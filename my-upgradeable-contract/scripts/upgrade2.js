const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x5C7D61E015dac2A58B42328B8C20D692f4477eD9";

async function main() {
  const BoxV3 = await ethers.getContractFactory("BoxV3");
  const upgraded2 = await upgrades.upgradeProxy(proxyAddress, BoxV3);
  console.log((await upgraded2.area()).toString());
  console.log((await upgraded2.perimeter()).toString());
  console.log((await upgraded2.add()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });