// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract CounterContract {
    uint public count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {

        count -= 1;

    }

    function getCount() public view returns (uint) {
        return count;
    }
}
