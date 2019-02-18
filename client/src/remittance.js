import web3 from "./web3";
const address = "0xB176BB0A62beb35CA6E255F1458F653Ae34708f3";

const abi = [
  {
    constant: false,
    inputs: [{ name: "personTosend", type: "address" }],
    name: "send",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "recipient",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "sender",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getContractBalance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "_from", type: "address" },
      { indexed: false, name: "_to", type: "address" },
      { indexed: false, name: "amount", type: "uint256" }
    ],
    name: "FundsSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "sender", type: "address" },
      { indexed: false, name: "amount", type: "uint256" }
    ],
    name: "ContractCreated",
    type: "event"
  }
];

export default new web3.eth.Contract(abi, address);
