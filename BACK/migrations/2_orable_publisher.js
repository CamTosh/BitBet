const BitBetOracle = artifacts.require("./BitbetOracle.sol");

module.exports = async (deployer) => {

	await deployer.deploy(BitBetOracle);
	const bitBetOracle = await BitBetOracle.deployed().then(function(instance) {
  	console.log(instance);

		instance.createBet();
	});
};
