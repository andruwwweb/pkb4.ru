const rangeSlider = document.getElementById('range__slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [1880, 2022],
        connect: true,
        step: 1,
        range: {
            'min': [1880],
            'max': [2022]
        }
    });

    const input0 = document.getElementById('input__0');
    const input1 = document.getElementById('input__1');

    const inputs = [input0, input1];


    rangeSlider.noUiSlider.on('update', function(values, handle) {
        console.log(values);
        console.log(handle);
        inputs[handle].value = Math.round(values[handle]);
    });
};