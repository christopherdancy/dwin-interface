/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CreateCall,
  CreateCallInterface,
} from "../../../contracts/libraries/CreateCall";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "ContractCreation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "deploymentData",
        type: "bytes",
      },
    ],
    name: "performCreate",
    outputs: [
      {
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "deploymentData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "performCreate2",
    outputs: [
      {
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061045f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634847be6f1461003b5780634c8c9ea114610134575b600080fd5b6101086004803603606081101561005157600080fd5b81019080803590602001909291908035906020019064010000000081111561007857600080fd5b82018360208201111561008a57600080fd5b803590602001918460018302840111640100000000831117156100ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610223565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101f76004803603604081101561014a57600080fd5b81019080803590602001909291908035906020019064010000000081111561017157600080fd5b82018360208201111561018357600080fd5b803590602001918460018302840111640100000000831117156101a557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610327565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008183518460200186f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f436f756c64206e6f74206465706c6f7920636f6e74726163740000000000000081525060200191505060405180910390fd5b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51181604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a19392505050565b600081516020830184f09050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f436f756c64206e6f74206465706c6f7920636f6e74726163740000000000000081525060200191505060405180910390fd5b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51181604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a19291505056fea26469706673582212203aa87bc5f141a4ee0319caa1412f294b7a71e2ffc270a0cc5e506a8b320df24464736f6c63430007060033";

type CreateCallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateCallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateCall__factory extends ContractFactory {
  constructor(...args: CreateCallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreateCall> {
    return super.deploy(overrides || {}) as Promise<CreateCall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CreateCall {
    return super.attach(address) as CreateCall;
  }
  override connect(signer: Signer): CreateCall__factory {
    return super.connect(signer) as CreateCall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateCallInterface {
    return new utils.Interface(_abi) as CreateCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateCall {
    return new Contract(address, _abi, signerOrProvider) as CreateCall;
  }
}
