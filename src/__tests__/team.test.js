import Character from "../Character";
import Team from "../team";

describe("testing add function", () => {
    const cat = new Character("cat");
    const animals = new Team();
    animals.add(cat);

    test("Should add a character to the team", () => {
        expect(animals.members).toEqual(new Set([{name: "cat"}]));
    });
    
    test("Should throw an error if a character is already in the team", () => {
        expect(() => {
            animals.add(cat);
        }).toThrow(Error);
    });
});

describe("testing addAll function", () => {
    const apple = new Character("apple");
    const orange = new Character("orange");
    const banana = new Character("banana");
    const fruits = new Team();
    fruits.addAll(apple, orange, banana);

    test("Should be able to add a few characters to the team", () => {
        expect(fruits.members).toEqual(new Set([{ name: "apple" }, { name: "orange" }, {name: "banana"}]));
    });
});

describe("testing toArray function", () => {
    const carrot = new Character("carrot");
    const tomato = new Character("tomato");
    const potato = new Character("potato");
    const veggies = new Team();
    veggies.addAll(carrot, tomato, potato);
    
    test("Should convert Set to array", () => {
        expect(veggies.toArray()).toEqual([{ name: "carrot" }, { name: "tomato" }, {name: "potato"}]);
    });
});