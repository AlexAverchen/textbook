it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

  /*если где то будет ошибка, мы не поймём в каком именно месте
   она произошла, так как все тесты находятся в одной функции, нужно 
   их разделить*/