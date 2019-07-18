function check(result, expected) {
  if (result.toString() !== expected.toString()) {
    console.log(
      'error: result ' + result + ' doesnt match expected value: ' + expected
    );
  }
}
