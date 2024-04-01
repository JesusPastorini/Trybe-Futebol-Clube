# 🚀 Projeto: Trybers and Dragons

## 📷 Fotos do Projeto

![Foto do Projeto](app/front-example.png)

## 📊 Diagrama de Relacionamento

![Diagrama de Relacionamento](app/diagrama-er.png)

## ℹ️ Sobre o Projeto

O projeto Trybers and Dragons (T&D) é um jogo de interpretação de papéis (RPG) onde os jogadores assumem o papel de personagens em um mundo de fantasia. O objetivo é aplicar os princípios da arquitetura SOLID e de programação orientada a objetos (POO) para desenvolver uma estrutura para o jogo.

## 🛠️ Tecnologias e Habilidades

- **Linguagem Utilizada:** JavaScript
- **Princípios de POO:** Encapsulamento, Herança, Polimorfismo, Abstração
- **Arquitetura SOLID:** Princípios de Responsabilidade Única (SRP), Aberto/Fechado (OCP), Substituição de Liskov (LSP), Segregação de Interface (ISP), Inversão de Dependência (DIP)

## 📋 Funcionalidades Implementadas

### 01 - Criação da Classe Race

- Implementação da classe abstrata `Race` que representa as diferentes raças presentes no universo de Trybers and Dragons.
- Definição dos atributos `name` e `dexterity` na classe `Race`.
- Criação do método estático `createdRacesInstances` que retorna o número de instâncias criadas das classes especializadas de `Race`.
- Declaração do getter abstrato `maxLifePoints` na classe `Race`.

### 02 - Criação de Classes Especializadas de Race

- Implementação de classes especializadas que herdam de `Race`, representando raças específicas do universo de T&D.

### 03 - Criação da Interface Energy

- Desenvolvimento da interface `Energy` para representar a energia dos seres no jogo.

### 04 - Criação da Classe Archetype

- Implementação da classe `Archetype` que representa os arquétipos das personagens em T&D.

### 05 - Criação de Classes Especializadas de Archetype

- Desenvolvimento de classes especializadas que herdam de `Archetype`, representando arquétipos específicos do universo de T&D.

### 06 - Criação da Interface Fighter

- Definição da interface `Fighter` para representar os lutadores no jogo.

### 07 - Criação da Classe Character

- Implementação da classe `Character` que representa as personagens do jogo.

### 08 - Criação da Interface SimpleFighter

- Desenvolvimento da interface `SimpleFighter` para representar os lutadores mais simples do jogo.
