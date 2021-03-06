function verify(input_size, output) {
    // Compute checksum from output
    var total_sum = 0;
    for (var i = 0; i < output.length; ++i) {
        total_sum += output[i];
    }

    // Use a value of epsilon that is 0.0001 percent of the input_size
    // to scale the tolerance factor by the input_size, which indirectly
    // influences the total_sum
    var eps = 0.000001 * input_size * input_size;

    // Roundown the least significant part of the sum by scaling up the value
    // and then flooring. This will tolerate some rounding differences during the 
    // floating-point operations
    return Math.floor(total_sum/eps);
}
