
# FavoriteNumber Smart Contract

## Overview

The `FavoriteNumber` smart contract allows users to store, retrieve, and update their favorite number on the Ethereum blockchain. Each user can have only one favorite number, which is associated with their Ethereum address.

## Features

- **Set Favorite Number:** Users can set their favorite number by calling the `setFavoriteNumber(uint256 _favoriteNumber)` function.
- **Retrieve Favorite Number:** Users can retrieve their currently stored favorite number using the `getFavoriteNumber()` function.
- **Update Favorite Number:** Users can update their favorite number by calling the `updateFavoriteNumber(uint256 _newFavoriteNumber)` function.
- **Event Emission:** An event, `FavoriteNumberUpdated`, is emitted whenever a user sets or updates their favorite number.

## Contract Functions

### `setFavoriteNumber(uint256 _favoriteNumber)`

- **Description:** Stores the caller's favorite number.
- **Parameters:** `_favoriteNumber` - The number the user wishes to set as their favorite.
- **Access:** Public - Can be called by any user.

### `getFavoriteNumber()`

- **Description:** Retrieves the caller's currently stored favorite number.
- **Returns:** `uint256` - The favorite number associated with the caller's address.
- **Access:** Public - Can be called by any user.

### `updateFavoriteNumber(uint256 _newFavoriteNumber)`

- **Description:** Updates the caller's favorite number to a new value.
- **Parameters:** `_newFavoriteNumber` - The new number the user wishes to set as their favorite.
- **Access:** Public - Can be called by any user.

## Events

### `FavoriteNumberUpdated(address indexed user, uint256 newFavoriteNumber)`

- **Description:** Emitted when a user sets or updates their favorite number.
- **Parameters:**
  - `user`: The address of the user who set or updated their favorite number.
  - `newFavoriteNumber`: The new favorite number set by the user.
