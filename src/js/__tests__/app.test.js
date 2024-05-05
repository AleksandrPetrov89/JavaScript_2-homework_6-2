import specialAttacks from '../app';

// eslint-disable-next-line no-undef
test('Проверка функции, извлекающей массив с данными о спец. атаках', () => {
    const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
            }
        ]
    };

    const exp = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ];

    const res = specialAttacks(obj);
    // eslint-disable-next-line no-undef
    expect(res.length).toBe(exp.length);
    for (let i = 0; i < res.length; i++) {
        // eslint-disable-next-line no-undef
        expect(res[i].id).toBe(exp[i].id);
        // eslint-disable-next-line no-undef
        expect(res[i].name).toBe(exp[i].name);
        // eslint-disable-next-line no-undef
        expect(res[i].icon).toBe(exp[i].icon);
        // eslint-disable-next-line no-undef
        expect(res[i].description).toBe(exp[i].description);
    }
},);
