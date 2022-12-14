/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../../common";

export interface IModuleFactoryBaseInterface extends utils.Interface {
  functions: {
    "addVersion(string,string,address)": FunctionFragment;
    "create(address,bytes[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addVersion" | "create"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addVersion",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]
  ): string;

  decodeFunctionResult(functionFragment: "addVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;

  events: {
    "VersionCreated(string,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VersionCreated"): EventFragment;
}

export interface VersionCreatedEventObject {
  semanticVersion: string;
  frontendURI: string;
  impl: string;
}
export type VersionCreatedEvent = TypedEvent<
  [string, string, string],
  VersionCreatedEventObject
>;

export type VersionCreatedEventFilter = TypedEventFilter<VersionCreatedEvent>;

export interface IModuleFactoryBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IModuleFactoryBaseInterface;

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
    addVersion(
      _semanticVersion: PromiseOrValue<string>,
      _frontendURI: PromiseOrValue<string>,
      _impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    create(
      creator: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addVersion(
    _semanticVersion: PromiseOrValue<string>,
    _frontendURI: PromiseOrValue<string>,
    _impl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  create(
    creator: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addVersion(
      _semanticVersion: PromiseOrValue<string>,
      _frontendURI: PromiseOrValue<string>,
      _impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      creator: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {
    "VersionCreated(string,string,address)"(
      semanticVersion?: null,
      frontendURI?: null,
      impl?: null
    ): VersionCreatedEventFilter;
    VersionCreated(
      semanticVersion?: null,
      frontendURI?: null,
      impl?: null
    ): VersionCreatedEventFilter;
  };

  estimateGas: {
    addVersion(
      _semanticVersion: PromiseOrValue<string>,
      _frontendURI: PromiseOrValue<string>,
      _impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    create(
      creator: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVersion(
      _semanticVersion: PromiseOrValue<string>,
      _frontendURI: PromiseOrValue<string>,
      _impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    create(
      creator: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
