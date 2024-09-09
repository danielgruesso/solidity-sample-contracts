// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./DataPrivacyFramework.sol";

contract AgeStorage is DataPrivacyFramework {
    uint256 private _age;

    /**
     * @notice by default, all users are allowed to execute all operations
     * @dev see DataPrivacyFramework contract methods for updating permissions
     */
    constructor() DataPrivacyFramework(false, false) {}

    function getAge() public view onlyAllowedUserOperation("op_get_age") returns (uint256) {
        return _age;
    }

    function isGreaterThan(uint256 age) public view onlyAllowedUserOperation("op_is_greater_than") returns (bool) {
        return _age > age;
    }

    function setAge(uint256 age) public onlyAllowedUserOperation("op_set_age") {
        _age = age;
    }
}
