/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FavoriteNumber",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FavoriteNumber__factory>;
    getContractFactory(
      name: "ExtendedOperations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExtendedOperations__factory>;

    getContractAt(
      name: "FavoriteNumber",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FavoriteNumber>;
    getContractAt(
      name: "ExtendedOperations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExtendedOperations>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
