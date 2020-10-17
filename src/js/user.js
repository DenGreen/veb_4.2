import { Bowman } from "./bowman";
import { Undead } from "./undead";
import { Swordsman } from "./swordsman";
import { Daemon } from "./daemon";
import { Magician } from "./magician";
import { Zombie } from "./zombie";
import { Team } from "./team";



const dan = new Bowman("Dan", "Bowman");
const greid = new Magician("Greid", "Magician");
const doom = new Daemon("Doom", "Daemon");
const shadron = new Swordsman("Shadron", "Swordsman");
const reiter = new Undead("Reiter", "Undead");
const trim = new Zombie("Trim", "Zombie");

const team = new Team();
    
team.addAll(dan, greid, doom, doom);
[...team]