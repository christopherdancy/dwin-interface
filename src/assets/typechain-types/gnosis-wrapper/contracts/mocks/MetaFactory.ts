/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IDAOFactory {
  export type CreateDAOParamsStruct = {
    daoImplementation: PromiseOrValue<string>;
    accessControlImplementation: PromiseOrValue<string>;
    salt: PromiseOrValue<BytesLike>;
    daoName: PromiseOrValue<string>;
    roles: PromiseOrValue<string>[];
    rolesAdmins: PromiseOrValue<string>[];
    members: PromiseOrValue<string>[][];
    daoFunctionDescs: PromiseOrValue<string>[];
    daoActionRoles: PromiseOrValue<string>[][];
  };

  export type CreateDAOParamsStructOutput = [
    string,
    string,
    string,
    string,
    string[],
    string[],
    string[][],
    string[],
    string[][]
  ] & {
    daoImplementation: string;
    accessControlImplementation: string;
    salt: string;
    daoName: string;
    roles: string[];
    rolesAdmins: string[];
    members: string[][];
    daoFunctionDescs: string[];
    daoActionRoles: string[][];
  };
}

export interface MetaFactoryInterface extends utils.Interface {
  functions: {
    "createDAOAndExecute(address,(address,address,bytes32,string,string[],string[],address[][],string[],string[][]),address[],bytes[][],address[],uint256[],bytes[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createDAOAndExecute" | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createDAOAndExecute",
    values: [
      PromiseOrValue<string>,
      IDAOFactory.CreateDAOParamsStruct,
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[][],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createDAOAndExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "DAOCreated(address,address,address)": EventFragment;
    "Executed(address[],uint256[],bytes[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DAOCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface DAOCreatedEventObject {
  daoAddress: string;
  accessControl: string;
  creator: string;
}
export type DAOCreatedEvent = TypedEvent<
  [string, string, string],
  DAOCreatedEventObject
>;

export type DAOCreatedEventFilter = TypedEventFilter<DAOCreatedEvent>;

export interface ExecutedEventObject {
  targets: string[];
  values: BigNumber[];
  calldatas: string[];
}
export type ExecutedEvent = TypedEvent<
  [string[], BigNumber[], string[]],
  ExecutedEventObject
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface MetaFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetaFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createDAOAndExecute(
      daoFactory: PromiseOrValue<string>,
      createDAOParams: IDAOFactory.CreateDAOParamsStruct,
      moduleFactories: PromiseOrValue<string>[],
      moduleFactoriesBytes: PromiseOrValue<BytesLike>[][],
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  createDAOAndExecute(
    daoFactory: PromiseOrValue<string>,
    createDAOParams: IDAOFactory.CreateDAOParamsStruct,
    moduleFactories: PromiseOrValue<string>[],
    moduleFactoriesBytes: PromiseOrValue<BytesLike>[][],
    targets: PromiseOrValue<string>[],
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    createDAOAndExecute(
      daoFactory: PromiseOrValue<string>,
      createDAOParams: IDAOFactory.CreateDAOParamsStruct,
      moduleFactories: PromiseOrValue<string>[],
      moduleFactoriesBytes: PromiseOrValue<BytesLike>[][],
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DAOCreated(address,address,address)"(
      daoAddress?: PromiseOrValue<string> | null,
      accessControl?: PromiseOrValue<string> | null,
      creator?: PromiseOrValue<string> | null
    ): DAOCreatedEventFilter;
    DAOCreated(
      daoAddress?: PromiseOrValue<string> | null,
      accessControl?: PromiseOrValue<string> | null,
      creator?: PromiseOrValue<string> | null
    ): DAOCreatedEventFilter;

    "Executed(address[],uint256[],bytes[])"(
      targets?: null,
      values?: null,
      calldatas?: null
    ): ExecutedEventFilter;
    Executed(
      targets?: null,
      values?: null,
      calldatas?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    createDAOAndExecute(
      daoFactory: PromiseOrValue<string>,
      createDAOParams: IDAOFactory.CreateDAOParamsStruct,
      moduleFactories: PromiseOrValue<string>[],
      moduleFactoriesBytes: PromiseOrValue<BytesLike>[][],
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createDAOAndExecute(
      daoFactory: PromiseOrValue<string>,
      createDAOParams: IDAOFactory.CreateDAOParamsStruct,
      moduleFactories: PromiseOrValue<string>[],
      moduleFactoriesBytes: PromiseOrValue<BytesLike>[][],
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
