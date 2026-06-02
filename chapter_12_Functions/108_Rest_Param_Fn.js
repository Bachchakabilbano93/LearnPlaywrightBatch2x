// Rest of the param. => Also called spread, valid only in case of last parameter, parameter is an object array
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Abir");