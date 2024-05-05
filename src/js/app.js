export default function specialAttacks(obj) {
    const attacks = [];
    for (const attack of obj.special) {
        const {
            id, name, icon, description = 'Описание недоступно',
        } = attack;
        attacks.push({
            id, name, icon, description,
        });
    }
    return attacks;
}
