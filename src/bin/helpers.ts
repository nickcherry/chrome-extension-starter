import { execSync } from 'child_process';

async function perform<T>(name: string, operation: () => Promise<T> | T) {
  console.log(`\n${name}: started`);

  try {
    const result = await operation();
    console.log(`${name}: completed`);
    if (result) {
      console.log(result);
    }
    return result;
  } catch (error) {
    console.error(`${name}: failed`);
    console.error(error);
    process.exit(1);
  }
}

async function cmd(command: string) {
  console.log(command);
  execSync(command);
}

export { cmd, perform };
