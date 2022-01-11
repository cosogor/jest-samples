//first.test.js
// https://habr.com/ru/post/502302/
test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('toEqual with objects', () => {
    expect({ foo: 'foo', subObject: { baz: 'baz' } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  //ок
    expect({ foo: 'foo', subObject: { num: 0 } })
        .toEqual({ foo: 'foo', subObject: { num: 0 } });  //ошибка
});

test('toEqual with arrays', () => {
    expect([11, 19, 5]).toEqual([11, 19, 5]); //ок
    expect([11, 19, 5]).toEqual([11, 19, 5]); //ошибка
});

test('toEqual with object Contain', () => {
    const arr = ['apple', 'orange', 'banana'];
    expect(arr).toContain('banana');
    expect(new Set(arr)).toContain('banana');
    expect('apple, orange, banana').toContain('banana');
});

test('toEqual with object Contain', () => {
    expect([{a: 1}, {b: 2}]).toContainEqual({a: 1});
    expect([1, 2, 3, 4]).toHaveLength(4);
    expect('foo').toHaveLength(3);
    expect({ length: 1 }).toHaveLength(1);
    const num = 0.1 + 0.2; // 0.30000000000000004
    expect(num).toBeCloseTo(0.3);
    expect(Math.PI).toBeCloseTo(3.14, 2);
    expect('Banana').toMatch(/Ba/);


// toThrow()
    function funcWithError() {
        throw new Error('some error');
    }
    expect(funcWithError).toThrow();
    expect(funcWithError).toThrow(Error);
    expect(funcWithError).toThrow('some error');
    expect(funcWithError).toThrow(/some/);

// .not
    expect(true).not.toBe(false);
    expect({ foo: 'bar' }).not.toEqual({});
    function funcWithoutError2() {}
    expect(funcWithoutError2).not.toThrow();
});
