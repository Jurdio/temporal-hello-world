const { Worker } = require('@temporalio/worker');
const path = require('path');
const activities = require('./activities');

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'hello-world',
  });
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
}); 