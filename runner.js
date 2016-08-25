var twister = require('./twister/ostrich-twister-prng.js')

function runner (input_size) {
    if (typeof performance === "undefined") {
       performance = Date;
    }
    
    // Create or load input data
    // Use the twister pseudo-random number generator
    var input = twister.rand(1, input_size);

    // Run kernel and measure time for core computation 
    var startTime = performance.now();
    output = kernel(input);
    var elapsedTime = (performance.now() - startTime) / 1000;

    // Verify output
    var checksum = verify(input_size, output);

    console.log('{' +
    '    "input": ' + input_size + 
    ',   "time": ' + elapsedTime + 
    ',   "output": ' + checksum +
    '}');
}
