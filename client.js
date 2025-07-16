const { Connection, WorkflowClient } = require('@temporalio/client');

async function run() {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });

  const handle = await client.start('helloWorkflow', {
    args: ['Temporal'],
    taskQueue: 'hello-world',
    workflowId: 'hello-workflow-id',
  });

  console.log(`Started workflow ${handle.workflowId}`);
  console.log('Result:', await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
}); 