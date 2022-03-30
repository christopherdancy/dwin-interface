/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMetaFactory,
  IMetaFactoryInterface,
} from "../../../contracts/interfaces/IMetaFactory";

const _abi = [
  {
    inputs: [],
    name: "CreateDAOReverted",
    type: "error",
  },
  {
    inputs: [],
    name: "CreateGovernorReverted",
    type: "error",
  },
  {
    inputs: [],
    name: "CreateTreasuryReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "daoFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "governorFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasuryFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasuryImplementation",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "daoImplementation",
            type: "address",
          },
          {
            internalType: "address",
            name: "accessControlImplementation",
            type: "address",
          },
          {
            internalType: "string",
            name: "daoName",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "roles",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "rolesAdmins",
            type: "string[]",
          },
          {
            internalType: "address[][]",
            name: "members",
            type: "address[][]",
          },
          {
            internalType: "string[]",
            name: "daoFunctionDescs",
            type: "string[]",
          },
          {
            internalType: "string[][]",
            name: "daoActionRoles",
            type: "string[][]",
          },
          {
            internalType: "address[]",
            name: "moduleTargets",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "moduleFunctionDescs",
            type: "string[]",
          },
          {
            internalType: "string[][]",
            name: "moduleActionRoles",
            type: "string[][]",
          },
        ],
        internalType: "struct IDAOFactory.CreateDAOParams",
        name: "createDAOParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IGovernorModule",
            name: "_govImpl",
            type: "address",
          },
          {
            internalType: "contract IVotesUpgradeable",
            name: "_token",
            type: "address",
          },
          {
            internalType: "contract ITimelockUpgradeable",
            name: "_timelockImpl",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "_initialVoteExtension",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "_initialVotingDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_initialVotingPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_initialProposalThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_initialQuorumNumeratorValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_minDelay",
            type: "uint256",
          },
        ],
        internalType: "struct IGovernorFactory.CreateGovernorParams",
        name: "createGovernorParams",
        type: "tuple",
      },
    ],
    name: "createDAOAndModules",
    outputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaFactoryInterface {
    return new utils.Interface(_abi) as IMetaFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaFactory {
    return new Contract(address, _abi, signerOrProvider) as IMetaFactory;
  }
}