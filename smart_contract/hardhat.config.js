require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/J1agxyPRLbbQ47XmnBhMzfr0JXmmyFTc',
      accounts: ['2f0fc7f663537ffdfa2717ef2d8721d63d29dbf76cfa25f7a7b38950163f42ac'],
    },
  },
};

// 0xE34eeFC46AF815cA910269FB3874044e7f9F3F39