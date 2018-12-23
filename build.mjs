import chain from 'dopees-chain';
import polymerModule from 'dopees-chain-polymer';

const { PolymerProject } = polymerModule;

const proj = new PolymerProject({
  sourceRoot: './src',
  targetRoot: './lib',
  application: false
});

const runner = chain.Runner.from([proj.createExecutor()]);

async function run() {
  try { await runner.execute(proj.taskName); }
  catch (e) { console.error(e); }
  console.log('DONE')
}

run();
