// Classe base: Veículo
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

// Método da classe base
Veiculo.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
};

// Classe Carro que herda de Veículo
function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano); // Chama o construtor da classe base
    this.portas = portas;
}

// Herdando os métodos de Veículo
Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

// Método específico da classe Carro
Carro.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this); // Reutiliza o método da base
    console.log(`Portas: ${this.portas}`);
};

// Classe Moto que herda de Veículo
function Moto(marca, modelo, ano, cilindrada) {
    Veiculo.call(this, marca, modelo, ano);
    this.cilindrada = cilindrada;
}

// Herdando os métodos de Veículo
Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

// Método específico da classe Moto
Moto.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this);
    console.log(`Cilindrada: ${this.cilindrada}cc`);
};

// Instanciando objetos
const carro1 = new Carro('Toyota', 'Corolla', 2024, 4);
const carro2 = new Carro('Honda', 'Civic', 2023, 4);
const moto1 = new Moto('Yamaha', 'MT-03', 2024, 321);

// Exibindo informações no console
console.log('--- Informações dos veículos ---');
carro1.displayInfo();
carro2.displayInfo();
moto1.displayInfo();