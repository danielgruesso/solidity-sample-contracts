// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FavoriteNumber {
    // Mapping to store the favorite Number
    mapping(address => uint256) private favoriteNumbers;

    // Event to emit when a favorite number is updated
    event FavoriteNumberUpdated(address indexed user, uint256 newFavoriteNumber);

    // Function to store the user's favorite number
    function setFavoriteNumber(uint256 _favoriteNumber) public {
        favoriteNumbers[msg.sender] = _favoriteNumber;
        emit FavoriteNumberUpdated(msg.sender, _favoriteNumber);
    }

    // Function to retrieve the current favorite number of the caller
    function getFavoriteNumber() public view returns (uint256) {
        return favoriteNumbers[msg.sender];
    }

    // Function to update the user's favorite number
    function updateFavoriteNumber(uint256 _newFavoriteNumber) public {
        favoriteNumbers[msg.sender] = _newFavoriteNumber;
        emit FavoriteNumberUpdated(msg.sender, _newFavoriteNumber);
    }
}
