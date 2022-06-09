const NFT = artifacts.require("ScratchNFT")
const Reward = artifacts.require("ScratchReward")
const Vault = artifacts.require("StakingVault")

module.exports = function (deployer) {
  deployer.deploy(NFT)
  // deployer.deploy(Reward)
  // deployer.deploy(
  //   Vault,
  //   "0x09688a63cCF5E92836035fbBD43A7Ed9F8245718",
  //   "0x58F5A2Da96629ECdD3e38b55f580Cd8A34beF2B9"
  // )
}

// NFT Collection   0x09688a63cCF5E92836035fbBD43A7Ed9F8245718
// Reward           0x58F5A2Da96629ECdD3e38b55f580Cd8A34beF2B9
// StakingVault     0x5d7dEbc37CbbbFd1364769b5fAd834389FfbC20D
