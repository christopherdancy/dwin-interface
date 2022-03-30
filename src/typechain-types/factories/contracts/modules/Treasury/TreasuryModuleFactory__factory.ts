/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TreasuryModuleFactory,
  TreasuryModuleFactoryInterface,
} from "../../../../contracts/modules/Treasury/TreasuryModuleFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "treasuryAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
    ],
    name: "TreasuryCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasuryImplementation",
        type: "address",
      },
    ],
    name: "createTreasury",
    outputs: [
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a60806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b57806357df78d914610063575b600080fd5b61004e610049366004610194565b61008e565b60405190151581526020015b60405180910390f35b6100766100713660046101e1565b6100c5565b6040516001600160a01b03909116815260200161005a565b60006001600160e01b031982166357df78d960e01b14806100bf57506301ffc9a760e01b6001600160e01b03198316145b92915050565b604080516001600160a01b03841660248083019190915282518083039091018152604490910182526020810180516001600160e01b031663189acdbd60e31b1790529051600091839161011790610187565b610122929190610214565b604051809103906000f08015801561013e573d6000803e3d6000fd5b509050826001600160a01b0316816001600160a01b03167fc66508a0af5b2cb3ca1697705aa93e894f4df91a54f28fc74262b7cd544b103560405160405180910390a392915050565b6107b18061027a83390190565b6000602082840312156101a657600080fd5b81356001600160e01b0319811681146101be57600080fd5b9392505050565b80356001600160a01b03811681146101dc57600080fd5b919050565b600080604083850312156101f457600080fd5b6101fd836101c5565b915061020b602084016101c5565b90509250929050565b60018060a01b038316815260006020604081840152835180604085015260005b8181101561025057858101830151858201606001528201610234565b81811115610262576000606083870101525b50601f01601f19169290920160600194935050505056fe60806040526040516107b13803806107b183398101604081905261002291610349565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610417565b60008051602061076a833981519152146100695761006961043c565b6100758282600061007c565b50506104a1565b610085836100b2565b6000825111806100925750805b156100ad576100ab83836100f260201b6100291760201c565b505b505050565b6100bb8161011e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610117838360405180606001604052806027815260200161078a602791396101de565b9392505050565b610131816102bc60201b6100551760201c565b6101985760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101bd60008051602061076a83398151915260001b6102cb60201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102465760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161018f565b600080856001600160a01b0316856040516102619190610452565b600060405180830381855af49150503d806000811461029c576040519150601f19603f3d011682016040523d82523d6000602084013e6102a1565b606091505b5090925090506102b28282866102ce565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102dd575081610117565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b815260040161018f919061046e565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610338578181015183820152602001610320565b838111156100ab5750506000910152565b6000806040838503121561035c57600080fd5b82516001600160a01b038116811461037357600080fd5b60208401519092506001600160401b038082111561039057600080fd5b818501915085601f8301126103a457600080fd5b8151818111156103b6576103b6610307565b604051601f8201601f19908116603f011681019083821181831017156103de576103de610307565b816040528281528860208487010111156103f757600080fd5b61040883602083016020880161031d565b80955050505050509250929050565b60008282101561043757634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161046481846020870161031d565b9190910192915050565b602081526000825180602084015261048d81604085016020870161031d565b601f01601f19169190910160400192915050565b6102ba806104b06000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025e602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606001600160a01b0384163b6101305760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161014b919061020e565b600060405180830381855af49150503d8060008114610186576040519150601f19603f3d011682016040523d82523d6000602084013e61018b565b606091505b509150915061019b8282866101a5565b9695505050505050565b606083156101b457508161004e565b8251156101c45782518084602001fd5b8160405162461bcd60e51b8152600401610127919061022a565b60005b838110156101f95781810151838201526020016101e1565b83811115610208576000848401525b50505050565b600082516102208184602087016101de565b9190910192915050565b60208152600082518060208401526102498160408501602087016101de565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c1396a395593415293023c3bc166734d52c4ee9136c6ff8eaef33568949ec5f064736f6c634300080d0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220bd1c2cfd6a88cdeebda8327947f4a97df630713096991455f8440316562bd43d64736f6c634300080d0033";

type TreasuryModuleFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryModuleFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryModuleFactory__factory extends ContractFactory {
  constructor(...args: TreasuryModuleFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TreasuryModuleFactory> {
    return super.deploy(overrides || {}) as Promise<TreasuryModuleFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TreasuryModuleFactory {
    return super.attach(address) as TreasuryModuleFactory;
  }
  override connect(signer: Signer): TreasuryModuleFactory__factory {
    return super.connect(signer) as TreasuryModuleFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryModuleFactoryInterface {
    return new utils.Interface(_abi) as TreasuryModuleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryModuleFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasuryModuleFactory;
  }
}