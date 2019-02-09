wrongly_optimized: {
    options = {
        booleans: true,
        conditionals: true,
        evaluate: true,
    }
    input: {
        function func() {
            foo();
        }
        if (func() || true) {
            bar();
        }
    }
    expect: {
        function func() {
            foo();
        }
        // TODO: optimize to `func(), bar()`
        (func(), 1) && bar();
    }
}
