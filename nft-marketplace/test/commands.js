const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmNqESrPBXH3mbjV5BLeRsAVayXNH97HVH9uoAG76M1S6e","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmX15MGqPn3BgCGuPG9jQMtzZQVBdC3fsc1GngmkbWCd7D","300000000000000000", {value: "25000000000000000",from: accounts[0]})
