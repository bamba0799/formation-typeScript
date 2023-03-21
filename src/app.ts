const compteur = document.querySelector('#compteur') 
let i = 0;
const increment = (e) => {
    i++;
    compteur.querySelector('span').innerText = i.toString()
}
compteur?.addEventListener('click', increment)


/**const a = "firstname"
const n = 3 
const b = true
const d: null = null
const arr: any[] = ['aze', 'aze', 3]
const user: {firstname: string, [key:string]: string} = {firstname:"john", lastname:"Doe"}
const date: Date = new Date();
console.log(user[a])
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3
}

const compteur = <HTMLButtonElement>document.querySelector('#compteur')

function printId(id: number): void {
    console.log(id.toString())
}*/
