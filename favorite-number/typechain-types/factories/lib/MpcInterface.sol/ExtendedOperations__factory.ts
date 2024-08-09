/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ExtendedOperations,
  ExtendedOperationsInterface,
} from "../../../lib/MpcInterface.sol/ExtendedOperations";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Add",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "And",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "Decrypt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Div",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Eq",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Ge",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "signedEK",
        type: "bytes",
      },
    ],
    name: "GetUserKey",
    outputs: [
      {
        internalType: "bytes",
        name: "encryptedKey",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Gt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Le",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Lt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Max",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Min",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Mul",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "bit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "Mux",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Ne",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "Not",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
    ],
    name: "OffBoard",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "addr",
        type: "bytes",
      },
    ],
    name: "OffBoardToUser",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
    ],
    name: "OnBoard",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Or",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
    ],
    name: "Rand",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint8",
        name: "numBits",
        type: "uint8",
      },
    ],
    name: "RandBoundedBits",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Rem",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "ct",
        type: "uint256",
      },
    ],
    name: "SetPublic",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Shl",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Shr",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Sub",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "metaData",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    outputs: [
      {
        internalType: "uint256",
        name: "new_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "new_b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "res",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "metaData",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "TransferWithAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "new_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "new_b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "res",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "new_allowance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "metaData",
        type: "bytes1",
      },
      {
        internalType: "uint256",
        name: "ciphertext",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ValidateCiphertext",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes3",
        name: "metaData",
        type: "bytes3",
      },
      {
        internalType: "uint256",
        name: "lhs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rhs",
        type: "uint256",
      },
    ],
    name: "Xor",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ExtendedOperations__factory {
  static readonly abi = _abi;
  static createInterface(): ExtendedOperationsInterface {
    return new utils.Interface(_abi) as ExtendedOperationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExtendedOperations {
    return new Contract(address, _abi, signerOrProvider) as ExtendedOperations;
  }
}
