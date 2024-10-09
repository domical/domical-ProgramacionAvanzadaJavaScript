
export class Animal {
    constructor(nombre, edad, img, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._sonido = sonido;
        this._comentario = '';
    }

    get Nombre() {
        return this._nombre;
    }

    get Edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    set Comentario(comentario) {
        this._comentario = comentario;
    }

    get Sonido() {
        return this._sonido;
    }

    reproducirSonido() {
        const audio = new Audio(this._sonido);
        audio.play();
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    }
    rugir() {
    return this.sonido;
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    }
    aullar() {
    return this.sonido;
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    }
    grunir() {
    return this.sonido;
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    }
    sisear() {
    return this.sonido;
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    }
    chillar() {
    return this.sonido;
    }
}
export { Aguila, Serpiente, Oso, Lobo, Leon };
