function calc(){
    let euro = euroField.value;
    result = euro * 0.981;
    usd.value = result.toFixed(2).replace('.', ',');
}