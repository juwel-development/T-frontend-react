import { exec } from 'node:child_process';
import simpleGit from 'simple-git';

const git = simpleGit();

function execAsync(
  command: string,
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}

async function run(): Promise<void> {
  try {
    const stagedFiles = await git.diff([
      '--cached',
      '--name-only',
      '--',
      'src/',
    ]);
    let files = stagedFiles.trim();

    if (!files) {
      const lastCommitFiles = await git.raw([
        'diff-tree',
        '--no-commit-id',
        '--name-only',
        '-r',
        'HEAD',
        '--',
        'src/',
      ]);
      files = lastCommitFiles.trim();
    }

    if (files) {
      console.log('Changed files detected in src/:');
      console.log(files);
      console.log('Running architecture tests...');
      const { stdout, stderr } = await execAsync('npm run test:architecture');
      console.log(stdout);
      if (stderr) console.error(stderr);
    } else {
      console.log('No relevant changes detected, skipping architecture tests.');
    }
  } catch (err) {
    console.error('Error running check:', err);
    process.exit(1);
  }
}

run();
