/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DegenerateApeParty,
  DegenerateApePartyInterface,
} from "../DegenerateApeParty";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_routerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dapAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "AddedLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountDap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountETH",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountDap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "elevatedFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPancakeFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IPancakeRouter02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setMarketingWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setPartyWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountDap",
        type: "uint256",
      },
    ],
    name: "swapDapForEth",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405269d3c21bcecceda10000006006556008600955600a80556001600b55600c805463ffffffff19166209c4001790553480156200003f57600080fd5b5060405162001f0638038062001f068339810160408190526200006291620004fa565b60405180604001604052806012815260200171446567656e6572617465417065506172747960701b8152506040518060400160405280600381526020016204441560ec1b8152508160039080519060200190620000c192919062000454565b508051620000d790600490602084019062000454565b505050620000f4620000ee6200031660201b60201c565b6200031a565b620001146200010b6005546001600160a01b031690565b6006546200036c565b600554600780546001600160a01b039283166001600160a01b03199182168117909255600880548216909217909155600d805492841692909116821790556040805163c45a015560e01b8152905163c45a015591600480820192602092909190829003018186803b1580156200018957600080fd5b505afa1580156200019e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c49190620004fa565b600e80546001600160a01b0319166001600160a01b03928316908117909155600d54604080516315ab88c960e31b81529051929363c9c653969330939091169163ad5c4648916004808301926020929190829003018186803b1580156200022a57600080fd5b505afa1580156200023f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002659190620004fa565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015620002ae57600080fd5b505af1158015620002c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e99190620004fa565b600c60046101000a8154816001600160a01b0302191690836001600160a01b031602179055505062000590565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620003c75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620003db91906200052c565b90915550506001600160a01b038216600090815260208190526040812080548392906200040a9084906200052c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620004629062000553565b90600052602060002090601f016020900481019282620004865760008555620004d1565b82601f10620004a157805160ff1916838001178555620004d1565b82800160010185558215620004d1579182015b82811115620004d1578251825591602001919060010190620004b4565b50620004df929150620004e3565b5090565b5b80821115620004df5760008155600101620004e4565b6000602082840312156200050d57600080fd5b81516001600160a01b03811681146200052557600080fd5b9392505050565b600082198211156200054e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200056857607f821691505b602082108114156200058a57634e487b7160e01b600052602260045260246000fd5b50919050565b61196680620005a06000396000f3fe6080604052600436106101d15760003560e01c806395d89b41116100f7578063c45a015511610095578063e67c94d311610064578063e67c94d31461057c578063f12560181461059c578063f2fde38b146105bc578063f887ea40146105dc57600080fd5b8063c45a0155146104e7578063d93e709d14610507578063dd62ed3e14610521578063ddf545121461056757600080fd5b8063a457c2d7116100d1578063a457c2d714610452578063a8aa1b3114610472578063a9059cbb1461049a578063bf609c87146104ba57600080fd5b806395d89b41146103ec57806398118cb4146104015780639cd441da1461041757600080fd5b8063395093511161016f57806370a082311161013e57806370a082311461034b578063715018a61461038157806375f0a874146103965780638da5cb5b146103ce57600080fd5b806339509351146102de5780633ccfd60b146102fe5780635d098b38146103135780636b67c4df1461033557600080fd5b806318160ddd116101ab57806318160ddd1461026d57806323b872dd1461028c5780632c6fa105146102ac578063313ce567146102c257600080fd5b806306fdde03146101dd578063089fe6aa14610208578063095ea7b31461023d57600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101f26105fc565b6040516101ff919061151d565b60405180910390f35b34801561021457600080fd5b50600c5461022990610100900462ffffff1681565b60405162ffffff90911681526020016101ff565b34801561024957600080fd5b5061025d610258366004611587565b61068e565b60405190151581526020016101ff565b34801561027957600080fd5b506002545b6040519081526020016101ff565b34801561029857600080fd5b5061025d6102a73660046115b3565b6106a4565b3480156102b857600080fd5b5061027e600a5481565b3480156102ce57600080fd5b50604051601281526020016101ff565b3480156102ea57600080fd5b5061025d6102f9366004611587565b610768565b34801561030a57600080fd5b5061025d6107a4565b34801561031f57600080fd5b5061033361032e3660046115f4565b610840565b005b34801561034157600080fd5b5061027e60095481565b34801561035757600080fd5b5061027e6103663660046115f4565b6001600160a01b031660009081526020819052604090205490565b34801561038d57600080fd5b506103336108c9565b3480156103a257600080fd5b506007546103b6906001600160a01b031681565b6040516001600160a01b0390911681526020016101ff565b3480156103da57600080fd5b506005546001600160a01b03166103b6565b3480156103f857600080fd5b506101f261092f565b34801561040d57600080fd5b5061027e600b5481565b34801561042357600080fd5b50610437610432366004611611565b61093e565b604080519384526020840192909252908201526060016101ff565b34801561045e57600080fd5b5061025d61046d366004611587565b610a4b565b34801561047e57600080fd5b50600c546103b69064010000000090046001600160a01b031681565b3480156104a657600080fd5b5061025d6104b5366004611587565b610afc565b3480156104c657600080fd5b506104da6104d5366004611633565b610b09565b6040516101ff919061164c565b3480156104f357600080fd5b50600e546103b6906001600160a01b031681565b34801561051357600080fd5b50600c5461025d9060ff1681565b34801561052d57600080fd5b5061027e61053c366004611690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561057357600080fd5b50610333610ccf565b34801561058857600080fd5b506008546103b6906001600160a01b031681565b3480156105a857600080fd5b506103336105b73660046115f4565b610d6a565b3480156105c857600080fd5b506103336105d73660046115f4565b610df3565b3480156105e857600080fd5b50600d546103b6906001600160a01b031681565b60606003805461060b906116c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610637906116c9565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b5050505050905090565b600061069b338484610ed5565b50600192915050565b60006106b184848461102d565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156107505760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61075d8533858403610ed5565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161069b91859061079f90869061171a565b610ed5565b6005546000906001600160a01b031633146108015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b476108146005546001600160a01b031690565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19695505050505050565b6005546001600160a01b0316331461089a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b6007805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005546001600160a01b031633146109235760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b61092d6000611276565b565b60606004805461060b906116c9565b600d54600090819081906109609030906001600160a01b031661079f60025490565b600d546001600160a01b031663f305d7198530886000806109896005546001600160a01b031690565b60405160e088901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b03958616600482015260248101949094526044840192909252606483015290911660848201524260a482015260c4016060604051808303818588803b158015610a0457600080fd5b505af1158015610a18573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a3d9190611732565b919790965090945092505050565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610ae55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610747565b610af23385858403610ed5565b5060019392505050565b600061069b33848461102d565b604080516002808252606080830184529260009291906020830190803683370190505090503081600081518110610b4257610b42611776565b6001600160a01b03928316602091820292909201810191909152600d54604080517fad5c46480000000000000000000000000000000000000000000000000000000081529051919093169263ad5c4648926004808301939192829003018186803b158015610baf57600080fd5b505afa158015610bc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be7919061178c565b81600181518110610bfa57610bfa611776565b6001600160a01b039283166020918202929092010152600d54610c209130911685610ed5565b600d546040517f18cbafe50000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906318cbafe590610c729086906000908690309042906004016117a9565b600060405180830381600087803b158015610c8c57600080fd5b505af1158015610ca0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cc8919081019061181a565b9392505050565b6005546001600160a01b03163314610d295760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b600c805460ff19811660ff9182161590811790925516151560011415610d5a5760636009556000600a819055600b55565b6008600955600a80556001600b55565b6005546001600160a01b03163314610dc45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b6008805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005546001600160a01b03163314610e4d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610747565b6001600160a01b038116610ec95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610747565b610ed281611276565b50565b6001600160a01b038316610f505760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610747565b6001600160a01b038216610fcc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610747565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6005546001600160a01b03163314806110505750600d546001600160a01b031633145b15611065576110608383836112d5565b505050565b600061108a600b54611084600a546009546114ed90919063ffffffff16565b906114ed565b905060006110a3606461109d85856114f9565b90611505565b905060006110b18483611511565b905060006110be83610b09565b90506000816000815181106110d5576110d5611776565b602002602001015190506000826001815181106110f4576110f4611776565b6020026020010151905061111b611114838761151190919063ffffffff16565b85906114ed565b935060006111388761109d600954856114f990919063ffffffff16565b905060006111558861109d600a54866114f990919063ffffffff16565b905060006111728961109d600b54876114f990919063ffffffff16565b905060006111818b6064611505565b6007546040519192506001600160a01b03169085156108fc029086906000818181858888f193505050501580156111bc573d6000803e3d6000fd5b50600a5415611201576008546040516001600160a01b039091169084156108fc029085906000818181858888f193505050501580156111ff573d6000803e3d6000fd5b505b600b541561125c57611213818361093e565b505060408051838152602081018590527fe74b04c1435e286c6b8eba73f0f16a0a2fcc9d21d879598ecacf17db8c49770192500160405180910390a16112598882611511565b97505b6112678d8d8a6112d5565b50505050505050505050505050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0383166113515760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610747565b6001600160a01b0382166113cd5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610747565b6001600160a01b0383166000908152602081905260409020548181101561145c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610747565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061149390849061171a565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114df91815260200190565b60405180910390a350505050565b6000610cc8828461171a565b6000610cc882846118d8565b6000610cc882846118f7565b6000610cc88284611919565b600060208083528351808285015260005b8181101561154a5785810183015185820160400152820161152e565b8181111561155c576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610ed257600080fd5b6000806040838503121561159a57600080fd5b82356115a581611572565b946020939093013593505050565b6000806000606084860312156115c857600080fd5b83356115d381611572565b925060208401356115e381611572565b929592945050506040919091013590565b60006020828403121561160657600080fd5b8135610cc881611572565b6000806040838503121561162457600080fd5b50508035926020909101359150565b60006020828403121561164557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561168457835183529284019291840191600101611668565b50909695505050505050565b600080604083850312156116a357600080fd5b82356116ae81611572565b915060208301356116be81611572565b809150509250929050565b600181811c908216806116dd57607f821691505b602082108114156116fe57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561172d5761172d611704565b500190565b60008060006060848603121561174757600080fd5b8351925060208401519150604084015190509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561179e57600080fd5b8151610cc881611572565b600060a082018783526020878185015260a0604085015281875180845260c086019150828901935060005b818110156117f95784516001600160a01b0316835293830193918301916001016117d4565b50506001600160a01b03969096166060850152505050608001529392505050565b6000602080838503121561182d57600080fd5b825167ffffffffffffffff8082111561184557600080fd5b818501915085601f83011261185957600080fd5b81518181111561186b5761186b611760565b8060051b604051601f19603f8301168101818110858211171561189057611890611760565b6040529182528482019250838101850191888311156118ae57600080fd5b938501935b828510156118cc578451845293850193928501926118b3565b98975050505050505050565b60008160001904831182151516156118f2576118f2611704565b500290565b60008261191457634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561192b5761192b611704565b50039056fea26469706673582212205d4b2cd6c9aff8910c5936582a4288726cd6c731a03af587f748104d7fda4efe64736f6c63430008090033";

type DegenerateApePartyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DegenerateApePartyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DegenerateApeParty__factory extends ContractFactory {
  constructor(...args: DegenerateApePartyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DegenerateApeParty";
  }

  deploy(
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DegenerateApeParty> {
    return super.deploy(
      _routerAddress,
      overrides || {}
    ) as Promise<DegenerateApeParty>;
  }
  getDeployTransaction(
    _routerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_routerAddress, overrides || {});
  }
  attach(address: string): DegenerateApeParty {
    return super.attach(address) as DegenerateApeParty;
  }
  connect(signer: Signer): DegenerateApeParty__factory {
    return super.connect(signer) as DegenerateApeParty__factory;
  }
  static readonly contractName: "DegenerateApeParty";
  public readonly contractName: "DegenerateApeParty";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DegenerateApePartyInterface {
    return new utils.Interface(_abi) as DegenerateApePartyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DegenerateApeParty {
    return new Contract(address, _abi, signerOrProvider) as DegenerateApeParty;
  }
}
