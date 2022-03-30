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
} from "../../common";

export interface IDAOInterface extends utils.Interface {
  functions: {
    "execute(address[],uint256[],bytes[])": FunctionFragment;
    "initialize(address,string)": FunctionFragment;
    "name()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "execute" | "initialize" | "name"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [string[], BigNumberish[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

  events: {
    "Executed(address[],uint256[],bytes[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

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

export interface IDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDAOInterface;

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
    execute(
      targets: string[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _accessControl: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;
  };

  execute(
    targets: string[],
    values: BigNumberish[],
    calldatas: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _accessControl: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    execute(
      targets: string[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _accessControl: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
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
    execute(
      targets: string[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _accessControl: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      targets: string[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _accessControl: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}