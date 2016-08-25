function kernel(input) {
    var input_size = input.length;
    var output = new Float64Array(input_size*input_size);

    // Multiply input by its transpose to create a 2D-matrix
    for (var col = 0; col < input_size; ++col) {
        for (var row = 0; row < input_size; ++row) {
            output[col*input_size+row] = input[row] * input[col];
        }  
    }

    // Perform element-wise multiplication
    for (var col = 0; col < input_size; ++col) {
        for (var row = 0; row < input_size; ++row) {
            output[col*input_size+row] = output[col*input_size+row] * output[col*input_size+row];
        }  
    }
    return output
}
