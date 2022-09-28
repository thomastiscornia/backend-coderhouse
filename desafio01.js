class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "Los siete locos",
        autor: "Roberto Arlt"
    },
    {
        nombre: "Los Pichiciegos",
        autor: "Rodolfo Fogwill"
    }

]

const randomGuy = new Usuario("Thomas", "Tiscornia", libros ,["Perro", "Gato"])

console.log(randomGuy.getFullName()); // Thomas Tiscornia

console.log(randomGuy.getBookNames()); // 'Los siete locos', 'Respiracion artificial'
randomGuy.addBook("Rayuela")
console.log(randomGuy.getBookNames()); // 'Los pichiciegos', 'Cicatrices', 'Rayuela'

console.log(randomGuy.countMascotas()); // 3
randomGuy.addMascota('Hamster');
console.log(randomGuy.countMascotas()); // 4