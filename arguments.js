// arguments

function printArguments(a, b, c) {
  // comsole.log(arguments[0]);
  // comsole.log(b);
  // comsole.log(c);
  // comsole.log(arguments.length);
  for (const arg of arguments) {
    comsole.log(arg);
  }
}
printArguments('Young', 'Mark', 'Koby');
