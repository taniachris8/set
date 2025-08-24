export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) { 
            throw new Error("Персонаж уже существует");
        }
        this.members.add(character);
    }

    addAll(...characters) { 
        characters.forEach((character) => this.add(character));
    }

    toArray() { 
        return [...this.members];
    }
}