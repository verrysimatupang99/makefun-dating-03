const LINE = "Trained on humanity's greatest romances. Still cannot hold a conversation past token 50.";

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function printUsage(): void {
  console.error('Usage: node main.ts [--shout] [--help]');
}

function main(): void {
  if (hasFlag('--help')) {
    printUsage();
    process.exitCode = 0;
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
