// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./DataPrivacyFramework.sol";

contract AgeStorage is DataPrivacyFramework {
    uint256 private _age;

    constructor() DataPrivacyFramework(false, false) {}

    function getAge() public view returns (uint256) {
        return _age;
    }

    function isGreaterThan(uint256 age) public view returns (bool) {
        return _age > age;
    }

    function setAge(uint256 age) public {
        _age = age;
    }
}
