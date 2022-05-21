require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan raise random unknown imitate private flee tube'; 
let testAccounts = [
"0x95743a116b528bd9dcfa1af926ffa7ee2704130a3347d825fa6dd72266fc897e",
"0x09e20c085bf8d95e82e6a9cfd773a858fb5d94ea6580370113141d8a90e36b9d",
"0x9d68425f9495ee537cfa6264063f61afc5dd411d745ae58b1382c02a98194894",
"0xcd0d2d3b5973520a69fae41a9c75ead9e9a173b5b53b0e8ffc3e0b886fe97bc8",
"0x79d752bad181fc3827d181005a05fdfa610fe492f1db90941c93caf2c090eea7",
"0x0288f8d674a289eade717f8f0b69062cf96100aeecf8e0e7f24f41628619bfd5",
"0xd915d5bd33569a254a471369aad3fb54951617f4d784329324b9fe9e5e5a9bc4",
"0xc9453ae60068c2b4faf613374b6b52c167137fc88721294944e24a27028fa0d7",
"0x9c32ded103be59580f661cb27532d864b3cd70c45aac638fe55adc54babdd2a1",
"0x97bff77fd7f3b29ef2cbbe9d3e86e8aaaba4396944733fbdad01a42538342aff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

