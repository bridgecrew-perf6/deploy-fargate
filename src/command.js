import { promisify } from 'util';
import { exec } from 'child_process';

const execCmd = promisify(exec);

export async function execute(cmd) {
  // eslint-disable-next-line no-console
  console.log(` ********** EXECUTE_COMMAND | ${cmd} ********** `);
  const { error, stdout, stderr } = await execCmd(cmd);
  if (error) {
    // eslint-disable-next-line no-console
    console.error(`error | ${error}`);
    // eslint-disable-next-line no-console
    console.error(`stderr | ${stderr}`);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log(`stdout | ${stdout}`);
  return stdout;
}

export default {
  execute,
};
