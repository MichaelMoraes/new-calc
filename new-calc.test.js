const calc = require('./new-calc');

////////////////////////////////ADIÇÂO


test('Soma 1 e 2 espera 3', () => {//Função seta1

    expect(calc.soma(1, 2)).toBe(3);

});


test('Soma -1 e -2 espera -3', () => {//Função seta2

    expect(calc.soma(-1, -2)).toBe(-3);

});

test('Soma 1 e -1 espera 0', () => {//Função seta3

    expect(calc.soma(1, -1)).toBe(0);

});

test('Soma 1 e 0 espera 1', () => {//Função seta4

    expect(calc.soma(1, 0)).toBe(1);

});

test('Soma 1 e \' A\' espera 1A', () => {//Função seta5

    expect(calc.soma(1, 'A')).toBe('1A');

});


////////////////////////////SUBTRAÇÂO

test('subitrai 1 - 1 e espera 0',() => {//Função seta1
    expect(calc.sub(1, 1)).toBe(0)
})


test('subitrai -1 - 1 e espera -2',() => {//Função seta2
    expect(calc.sub(-1, 1)).toBe(-2)
})


test('subitrai -1 - (-1) e espera 0',() => {//Função seta3
    expect(calc.sub(-1,-1)).toBe(0)
})

test('subitrai -1 - 0 e espera -1',() => {//Função seta4
    expect(calc.sub(-1,0)).toBe(-1)
})

//////////////////////////Multiplicação

test('multiplica 2 * 2 e espera 4', () => {//Função seta1
    
    expect(calc.mult(2,2)).toBe(4)
})


test('multiplica 2 * -2 e espera -4', () => {//Função seta2
    
    expect(calc.mult(2,-2)).toBe(-4)
})


test('multiplica -4 * (-4) e espera 16', () => {//Função seta3
    
    expect(calc.mult(-4,-4)).toBe(16)
})


test('multiplica 3 * 0 e espera 0',()=>{//Função seta4
    expect(calc.mult(3,0)).toBe(0)
})

//////////////////////////DiVISÂO

test('divide 1 / 1 e espera 1',() => {//Função seta1
    expect(calc.div(1, 1)).toBe(1)
})


test('divide -1 / 1 e espera -1',() => {//Função seta2
    expect(calc.div(-1, 1)).toBe(-1)
})


test('divide -1 / (-1) e espera 1',() => {//Função seta3
    expect(calc.div(-1,-1)).toBe(1)
})


test('divide 1 / 0 e espera infinity',() => {//Função seta4
    expect(calc.div(1,0)).toBe(Infinity)
})