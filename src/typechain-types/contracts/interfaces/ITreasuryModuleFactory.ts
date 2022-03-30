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
} from "../../common";

export interface ITreasuryModuleFactoryInterface extends utils.Interface {
  functions: {
    "createTreasury(address,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createTreasury"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTreasury",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTreasury",
    data: BytesLike
  ): Result;

  events: {
    "TreasuryCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TreasuryCreated"): EventFragment;
}

export interface TreasuryCreatedEventObject {
  treasuryAddress: string;
  accessControl: string;
}
export type TreasuryCreatedEvent = TypedEvent<
  [string, string],
  TreasuryCreatedEventObject
>;

export type TreasuryCreatedEventFilter = TypedEventFilter<TreasuryCreatedEvent>;

export interface ITreasuryModuleFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITreasuryModuleFactoryInterface;

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
    createTreasury(
      accessControl: string,
      treasuryImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createTreasury(
    accessControl: string,
    treasuryImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createTreasury(
      accessControl: string,
      treasuryImplementation: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "TreasuryCreated(address,address)"(
      treasuryAddress?: string | null,
      accessControl?: string | null
    ): TreasuryCreatedEventFilter;
    TreasuryCreated(
      treasuryAddress?: string | null,
      accessControl?: string | null
    ): TreasuryCreatedEventFilter;
  };

  estimateGas: {
    createTreasury(
      accessControl: string,
      treasuryImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTreasury(
      accessControl: string,
      treasuryImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}