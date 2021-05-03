require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind concert grace globe fresh tumble'; 
let testAccounts = [
"0xf1e68c8a9233e2ca53406c38a124d6e2c2acbc41bcba98852bf675a4d6d671d8",
"0x2e689903167f8872a15b4d578998865f16136526b9bf12efa03fba8d1f0ac2c7",
"0xbbf21b3698a587570f321ed7c63d17d4fefec619c8101b5b34816d4cd28fb439",
"0x881265e54c84a24f2bb2107c0ccb5ab5e647917584307830e7d5ede87284463e",
"0x86b97cfe1b814b3be5ad6194aa790bd715df55cf8d118c620ff9bf12cfe194d3",
"0x273550bc7e233eaaebe2f078c3cce9621d392ef6007e1456711d4285048050e8",
"0xf74738577258d93a267dffca83f5c0575f958389d95471a611fe5449638a32a3",
"0x353e5b78a53c791c11aef85e314eede2775c7931afb07026f8cff309f6b1d806",
"0x4563766174852218f9e052a03ffd5a513c62617d55a1810ed020e545b3b9a522",
"0x993ff3c9b1541e0b3b27c7ada73344f168fa79b7bfc8f1d8581888ef25ae7fa9"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
