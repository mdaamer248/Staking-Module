const NFT = artifacts.require("ScratchNFT")
const Reward = artifacts.require("ScratchReward")
const Vault = artifacts.require("StakingVault")

module.exports = function (deployer) {
  deployer.deploy(NFT)
  // deployer.deploy(Reward)
  // deployer.deploy(
  //   Vault,
  //   "",
  //   ""
  // )
}
