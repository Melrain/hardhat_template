import { expect, assert } from 'chai';
import { ethers } from 'hardhat';

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe('TestModifyVariable', function () {
  it('should change x to 1337', async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory('ModifyVariable');

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10, 'mel');

    // wait for contract to be deployed and validated!
    await contract.waitForDeployment();

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();

    // modify name to 'melrain'

    await contract.setName('melrain');
    // getter for state variable x
    const newX = await contract.x();

    assert.equal(newX, BigInt(1337));
    assert.equal(await contract.name(), 'melrain');
  });
});
