import { Product }  from './products';

export interface Mountain {
    name: string;
    height: number;
}

const mountains : Mountain[] = [{name: 'Kilimanjaro', height: 19341}, {name: 'Everest', height: 29029}, {name: 'Denali', height: 20310}];


export function findNameOfTallestMountain (mountains: Mountain[]) : string {
    let tallestMountain = mountains[0];
    for (let i=0; i < mountains.length; i ++) {
        if (mountains[i].height > tallestMountain.height) {
            tallestMountain = mountains[i];
        }
    }
    return tallestMountain.name;
}

let myTallestMountain = findNameOfTallestMountain(mountains);

console.log(myTallestMountain);