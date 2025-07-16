const { proxyActivities } = require('@temporalio/workflow');

const { helloWorld } = proxyActivities({ startToCloseTimeout: '1 minute' });

/**
 * @workflow
 */
async function helloWorkflow(name) {
  return await helloWorld(name);
}

module.exports = { helloWorkflow }; 