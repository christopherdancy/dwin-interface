/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TreasuryModule,
  TreasuryModuleInterface,
} from "../../../../contracts/mocks/treasury/TreasuryModule";

const _abi = [
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnequalArrayLengths",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "senders",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC20TokensDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC20TokensWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "senders",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "ERC721TokensDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "ERC721TokensWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "EthWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "accessControl",
    outputs: [
      {
        internalType: "contract IAccessControlDAO",
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
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "senders",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "depositERC20Tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "senders",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "depositERC721Tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleFactory",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "withdrawERC20Tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "withdrawERC721Tokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "withdrawEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611fc061004c600039600081816105ab015281816105f401528181610693015281816106d301526107660152611fc06000f3fe6080604052600436106100e15760003560e01c806352d1902d1161007f578063c20eaa1211610059578063c20eaa12146102b0578063c4d66de8146102d0578063ce3ebbad146102f0578063fb1d100e1461031057600080fd5b806352d1902d1461024d5780638991255b146102705780639ae6b5be1461029057600080fd5b8063150b7a02116100bb578063150b7a02146101b457806316633fa8146101f85780633659cfe61461021a5780634f1ef2861461023a57600080fd5b806301ffc9a71461012557806306fdde031461015a57806313007d551461017c57600080fd5b3661012057604080513381523460208201527f66ff7c8f71ccc7c36152a41920d0d3b46ef3034359f76aa1498ed4478c204b5c910160405180910390a1005b600080fd5b34801561013157600080fd5b506101456101403660046118c4565b610330565b60405190151581526020015b60405180910390f35b34801561016657600080fd5b5061016f61035b565b604051610151919061191a565b34801561018857600080fd5b5060655461019c906001600160a01b031681565b6040516001600160a01b039091168152602001610151565b3480156101c057600080fd5b506101df6101cf366004611a07565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610151565b34801561020457600080fd5b50610218610213366004611abb565b6103ed565b005b34801561022657600080fd5b50610218610235366004611b55565b6105a1565b610218610248366004611b70565b610689565b34801561025957600080fd5b50610262610759565b604051908152602001610151565b34801561027c57600080fd5b5060665461019c906001600160a01b031681565b34801561029c57600080fd5b506102186102ab366004611abb565b61080c565b3480156102bc57600080fd5b506102186102cb366004611abb565b610a0a565b3480156102dc57600080fd5b506102186102eb366004611b55565b610c08565b3480156102fc57600080fd5b5061021861030b366004611abb565b610ca7565b34801561031c57600080fd5b5061021861032b366004611bbe565b610e3f565b60006001600160e01b0319821663bf7ee64f60e01b1480610355575061035582610fd1565b92915050565b60606067805461036a90611c2a565b80601f016020809104026020016040519081016040528092919081815260200182805461039690611c2a565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b5050505050905090565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061043090339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa15801561044d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104719190611c91565b61048e5760405163ea8e4eb560e01b815260040160405180910390fd5b848314158061049d5750848114155b156104bb576040516311e86f7360e01b815260040160405180910390fd5b8460005b81811015610556576105418686838181106104dc576104dc611cb3565b90506020020160208101906104f19190611b55565b85858481811061050357610503611cb3565b905060200201358a8a8581811061051c5761051c611cb3565b90506020020160208101906105319190611b55565b6001600160a01b03169190611006565b6001018061054e81611cc9565b9150506104bf565b507f279ee69c859e439f9c0a143eba32e0a9c0dd4ccab6f0f0f7b5df1a4c73eb2f8f87878787878760405161059096959493929190611d6d565b60405180910390a150505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105f25760405162461bcd60e51b81526004016105e990611db6565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661063b600080516020611f44833981519152546001600160a01b031690565b6001600160a01b0316146106615760405162461bcd60e51b81526004016105e990611e02565b61066a8161106e565b604080516000808252602082019092526106869183919061110f565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106d15760405162461bcd60e51b81526004016105e990611db6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661071a600080516020611f44833981519152546001600160a01b031690565b6001600160a01b0316146107405760405162461bcd60e51b81526004016105e990611e02565b6107498261106e565b6107558282600161110f565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107f95760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016105e9565b50600080516020611f4483398151915290565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061084f90339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190611c91565b6108ad5760405163ea8e4eb560e01b815260040160405180910390fd5b84831415806108bc5750848114155b156108da576040516311e86f7360e01b815260040160405180910390fd5b8460005b818110156109d0578787828181106108f8576108f8611cb3565b905060200201602081019061090d9190611b55565b6001600160a01b03166342842e0e87878481811061092d5761092d611cb3565b90506020020160208101906109429190611b55565b3087878681811061095557610955611cb3565b6040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015250602090910201356044820152606401600060405180830381600087803b1580156109ac57600080fd5b505af11580156109c0573d6000803e3d6000fd5b5050600190920191506108de9050565b507f62e602fa7b8d1849d67c000a48e0e1d8a1046aadd78b524ffba8e69ad277f8b387878787878760405161059096959493929190611d6d565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610a4d90339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa158015610a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8e9190611c91565b610aab5760405163ea8e4eb560e01b815260040160405180910390fd5b8483141580610aba5750848114155b15610ad8576040516311e86f7360e01b815260040160405180910390fd5b8460005b81811015610bce57878782818110610af657610af6611cb3565b9050602002016020810190610b0b9190611b55565b6001600160a01b03166342842e0e30888885818110610b2c57610b2c611cb3565b9050602002016020810190610b419190611b55565b878786818110610b5357610b53611cb3565b6040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015250602090910201356044820152606401600060405180830381600087803b158015610baa57600080fd5b505af1158015610bbe573d6000803e3d6000fd5b505060019092019150610adc9050565b507f098a00c78513360f53ddec2fba6ff5cee156eeae8fcb72797988acb497611c0e87878787878760405161059096959493929190611d6d565b6000610c14600161127a565b90508015610c2c576000805461ff0019166101001790555b610c5e82336040518060400160405280600f81526020016e5472656173757279204d6f64756c6560881b815250611307565b8015610755576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610cea90339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa158015610d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2b9190611c91565b610d485760405163ea8e4eb560e01b815260040160405180910390fd5b8483141580610d575750848114155b15610d75576040516311e86f7360e01b815260040160405180910390fd5b8460005b81811015610e0557610dfd868683818110610d9657610d96611cb3565b9050602002016020810190610dab9190611b55565b30868685818110610dbe57610dbe611cb3565b905060200201358b8b86818110610dd757610dd7611cb3565b9050602002016020810190610dec9190611b55565b6001600160a01b031692919061137a565b600101610d79565b507f057589822293e3f912f1d5b49bbcd6513212cf97ecd74bffc31d4178653fd70c87878787878760405161059096959493929190611d6d565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610e8290339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190611c91565b610ee05760405163ea8e4eb560e01b815260040160405180910390fd5b828114610f00576040516311e86f7360e01b815260040160405180910390fd5b8260005b81811015610f8c57858582818110610f1e57610f1e611cb3565b9050602002016020810190610f339190611b55565b6001600160a01b03166108fc858584818110610f5157610f51611cb3565b905060200201359081150290604051600060405180830381858888f19350505050158015610f83573d6000803e3d6000fd5b50600101610f04565b507fd8043a55fabd5bef5435dec665e02f814171964a1ee23b23df5796a997a78aa285858585604051610fc29493929190611e4e565b60405180910390a15050505050565b60006001600160e01b031982166314026af160e01b148061035557506301ffc9a760e01b6001600160e01b0319831614610355565b6040516001600160a01b03831660248201526044810182905261106990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526113b8565b505050565b6065546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd4906110b190339030906001600160e01b03196000351690600401611c64565b602060405180830381865afa1580156110ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f29190611c91565b6106865760405163ea8e4eb560e01b815260040160405180910390fd5b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611142576110698361148a565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561119c575060408051601f3d908101601f1916820190925261119991810190611e75565b60015b6111ff5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016105e9565b600080516020611f44833981519152811461126e5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016105e9565b50611069838383611526565b60008054610100900460ff16156112c1578160ff16600114801561129d5750303b155b6112b95760405162461bcd60e51b81526004016105e990611e8e565b506000919050565b60005460ff8084169116106112e85760405162461bcd60e51b81526004016105e990611e8e565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff1661132e5760405162461bcd60e51b81526004016105e990611edc565b606580546001600160a01b038086166001600160a01b0319928316179092556066805492851692909116919091179055805161137190606790602084019061182b565b5061106961154b565b6040516001600160a01b03808516602483015283166044820152606481018290526113b29085906323b872dd60e01b90608401611032565b50505050565b600061140d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115749092919063ffffffff16565b805190915015611069578080602001905181019061142b9190611c91565b6110695760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105e9565b6001600160a01b0381163b6114f75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016105e9565b600080516020611f4483398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61152f8361158d565b60008251118061153c5750805b15611069576113b283836115cd565b600054610100900460ff166115725760405162461bcd60e51b81526004016105e990611edc565b565b606061158384846000856116c1565b90505b9392505050565b6115968161148a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6116355760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016105e9565b600080846001600160a01b0316846040516116509190611f27565b600060405180830381855af49150503d806000811461168b576040519150601f19603f3d011682016040523d82523d6000602084013e611690565b606091505b50915091506116b88282604051806060016040528060278152602001611f64602791396117f2565b95945050505050565b6060824710156117225760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105e9565b6001600160a01b0385163b6117795760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105e9565b600080866001600160a01b031685876040516117959190611f27565b60006040518083038185875af1925050503d80600081146117d2576040519150601f19603f3d011682016040523d82523d6000602084013e6117d7565b606091505b50915091506117e78282866117f2565b979650505050505050565b60608315611801575081611586565b8251156118115782518084602001fd5b8160405162461bcd60e51b81526004016105e9919061191a565b82805461183790611c2a565b90600052602060002090601f016020900481019282611859576000855561189f565b82601f1061187257805160ff191683800117855561189f565b8280016001018555821561189f579182015b8281111561189f578251825591602001919060010190611884565b506118ab9291506118af565b5090565b5b808211156118ab57600081556001016118b0565b6000602082840312156118d657600080fd5b81356001600160e01b03198116811461158657600080fd5b60005b838110156119095781810151838201526020016118f1565b838111156113b25750506000910152565b60208152600082518060208401526119398160408501602087016118ee565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461130257600080fd5b634e487b7160e01b600052604160045260246000fd5b600082601f83011261198b57600080fd5b813567ffffffffffffffff808211156119a6576119a6611964565b604051601f8301601f19908116603f011681019082821181831017156119ce576119ce611964565b816040528381528660208588010111156119e757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215611a1d57600080fd5b611a268561194d565b9350611a346020860161194d565b925060408501359150606085013567ffffffffffffffff811115611a5757600080fd5b611a638782880161197a565b91505092959194509250565b60008083601f840112611a8157600080fd5b50813567ffffffffffffffff811115611a9957600080fd5b6020830191508360208260051b8501011115611ab457600080fd5b9250929050565b60008060008060008060608789031215611ad457600080fd5b863567ffffffffffffffff80821115611aec57600080fd5b611af88a838b01611a6f565b90985096506020890135915080821115611b1157600080fd5b611b1d8a838b01611a6f565b90965094506040890135915080821115611b3657600080fd5b50611b4389828a01611a6f565b979a9699509497509295939492505050565b600060208284031215611b6757600080fd5b6115868261194d565b60008060408385031215611b8357600080fd5b611b8c8361194d565b9150602083013567ffffffffffffffff811115611ba857600080fd5b611bb48582860161197a565b9150509250929050565b60008060008060408587031215611bd457600080fd5b843567ffffffffffffffff80821115611bec57600080fd5b611bf888838901611a6f565b90965094506020870135915080821115611c1157600080fd5b50611c1e87828801611a6f565b95989497509550505050565b600181811c90821680611c3e57607f821691505b602082108103611c5e57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611ca357600080fd5b8151801515811461158657600080fd5b634e487b7160e01b600052603260045260246000fd5b600060018201611ce957634e487b7160e01b600052601160045260246000fd5b5060010190565b8183526000602080850194508260005b85811015611d2c576001600160a01b03611d198361194d565b1687529582019590820190600101611d00565b509495945050505050565b81835260006001600160fb1b03831115611d5057600080fd5b8260051b8083602087013760009401602001938452509192915050565b606081526000611d8160608301888a611cf0565b8281036020840152611d94818789611cf0565b90508281036040840152611da9818587611d37565b9998505050505050505050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b604081526000611e62604083018688611cf0565b82810360208401526117e7818587611d37565b600060208284031215611e8757600080fd5b5051919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251611f398184602087016118ee565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220f68d7b6713cd77306f9d07c29edbfcdde7f40c052c8ec74396389fa6704aa05064736f6c634300080d0033";

type TreasuryModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryModule__factory extends ContractFactory {
  constructor(...args: TreasuryModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TreasuryModule> {
    return super.deploy(overrides || {}) as Promise<TreasuryModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TreasuryModule {
    return super.attach(address) as TreasuryModule;
  }
  override connect(signer: Signer): TreasuryModule__factory {
    return super.connect(signer) as TreasuryModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryModuleInterface {
    return new utils.Interface(_abi) as TreasuryModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryModule {
    return new Contract(address, _abi, signerOrProvider) as TreasuryModule;
  }
}