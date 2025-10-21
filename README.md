# 🌍 web_project_around

![Preview do projeto](./src/images/preview-around.png)

> Clique na imagem acima para acessar o projeto em produção / Click on the image above to access the project in production:

> 👉 [https://perozin.github.io/web_project_around/src](https://perozin.github.io/web_project_around/src)

### 🗣️ README BILÍNGUE — Português / English

---

## 🇧🇷 **Descrição do Projeto**

O **web_project_around** é uma aplicação web interativa desenvolvida durante o processo de aprendizagem de **Desenvolvimento Web Full Stack**.
Inicialmente concebido sob o **paradigma da Programação Funcional**, o projeto foi **refatorado para o paradigma da Programação Orientada a Objetos (POO)**, promovendo melhor **organização, reutilização e escalabilidade do código**.

O projeto implementa conceitos como **herança, polimorfismo e encapsulamento**, além de aplicar **boas práticas de modularização de código JavaScript ES6+**, **metodologia BEM (Block Element Modifier)** para estruturação CSS e **componentização** na camada de scripts.

---

## 🇺🇸 **Project Description**

**web_project_around** is an interactive web application developed as part of the **Full Stack Web Development** learning path.
Originally designed following the **Functional Programming paradigm**, it has now been **refactored into the Object-Oriented Programming (OOP) paradigm**, ensuring better **organization, reusability, and scalability**.

The project demonstrates the use of **inheritance, polymorphism, and encapsulation**, along with **modular JavaScript ES6+ architecture**, **BEM methodology** for CSS structuring, and a **component-based script design**.

---

## 🧩 **Principais Funcionalidades / Key Features**

- Exibição dinâmica de cards com imagens e legendas.
- Abertura de popups com formulários e visualização de imagem ampliada.
- Validação de formulários com mensagens de erro em tempo real.
- Criação, edição e exclusão de elementos dinâmicos na interface.
- Estrutura modularizada e orientada a objetos.
- Interface responsiva e adaptada para múltiplos tamanhos de tela.

---

- Dynamic display of cards with images and captions.
- Opening popups with forms and enlarged image display.
- Form validation with real-time error messages.
- Creation, editing, and deletion of dynamic elements in the interface.
- Modularized and object-oriented structure.
- Responsive interface adapted to multiple screen sizes.

---

## 🏗️ **Estrutura do Projeto / Project Structure**

```
web_project_around/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
│
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── FormValidator.js
│   │   ├── Popup.js
│   │   ├── PopupWithForm.js
│   │   ├── PopupWithImage.js
│   │   └── Section.js
│   │
│   ├── pages/
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── images/
│   │   └── [project images]
│   │
│   ├── blocks/
│   │   ├── content.css
│   │   ├── element.css
│   │   ├── elements.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── header.css
│   │   ├── modal.css
│   │   ├── page.css
│   │   ├── profile.css
│   │   └── root.css
│   │
│   ├── vendor/
│   │   ├── fonts/
│   │   ├── fonts.css
│   │   └── normalize.css
│   │
│   └── utils/
│       ├── constants.js
│       └── util.js
│
├── .editorconfig
├── .gitignore
├── .prettierignore
├── favicon.ico
├── index.html
└── README.md
```

---

## ⚙️ **Tecnologias Utilizadas / Technologies Used**

- **HTML5** – estrutura semântica e acessível
- **CSS3 (BEM)** – metodologia de modularização e escalabilidade
- **JavaScript (ES6+)** – código moderno, orientado a objetos
- **POO (OOP)** – aplicação de herança, polimorfismo e encapsulamento
- **Módulos JS (`import` / `export`)**
- **Boas práticas de componentização e reutilização**
- **VS Code** como ambiente de desenvolvimento (configurado via `.vscode`)
- Git + GitHub
- Media Queries
- CSS Flexbox e Grid Layout
- Web design responsivo

---

- **HTML5** – semantic and accessible structure
- **CSS3 (BEM)** – modularization and scalability methodology
- **JavaScript (ES6+)** – modern, object-oriented code
- **OOP (Originally OOP)** – application of inheritance, polymorphism, and encapsulation
- **JS modules (`import` / `export`)**
- **Good practices for componentization and reuse**
- **VS Code** as a development environment (configured via `.vscode`)
- Git + GitHub
- Media Queries
- CSS Flexbox and Grid Layout
- Responsive web design

---

## 🧠 **Conceitos de POO Aplicados / OOP Concepts Implemented**

| Conceito                           | Descrição                                                  | Exemplo de Implementação                                            |
| ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- |
| **Herança (Inheritance)**          | Reaproveitamento de código através de classes derivadas.   | `PopupWithForm` e `PopupWithImage` herdam de `Popup`.               |
| **Polimorfismo (Polymorphism)**    | Sobrescrita e adaptação de métodos herdados.               | Métodos `open()` e `close()` redefinidos conforme o tipo de popup.  |
| **Encapsulamento (Encapsulation)** | Organização e proteção de propriedades e métodos internos. | Métodos e atributos privados com prefixo `_`.                       |
| **Abstração (Abstraction)**        | Separação da lógica em classes genéricas e específicas.    | `Card`, `Section` e `FormValidator` são classes autônomas e coesas. |

---

| Concept           | Description                                                     | Implementation Example                                                      |
| ----------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Inheritance**   | Code reuse through derived classes.                             | `PopupWithForm` and `PopupWithImage` inherit from `Popup`.                  |
| **Polymorphism**  | Overriding and adapting inherited methods.                      | `open()` and `close()` methods redefined according to the popup type.       |
| **Encapsulation** | Organization and protection of internal properties and methods. | Private methods and attributes with the `_` prefix.                         |
| **Abstraction**   | Separation of logic into generic and specific classes.          | `Card`, `Section`, and `FormValidator` are autonomous and cohesive classes. |

---

## 🚀 **Como Executar / How to Run**

1. Clone o repositório:

```bash
git clone https://github.com/Perozin/web_project_around.git
```

2. Acesse a pasta do projeto:

```bash
cd web_project_around/src
```

3. Abra o arquivo `index.html` diretamente no navegador.
   _(Não requer servidor local para execução.)_

---

1. Clone the repository:

```bash
git clone https://github.com/Perozin/web_project_around.git
```

2. Access the project folder:

```bash
cd web_project_around/src
```

3. Open the index.html file directly in the browser.
   (Does not require a local server to run.)

---

## 🧾 **Resumo de Atualizações / Changelog**

### 🆕 Versão 2.0 — Refatoração para POO / OOP Refactor

- Reestruturação completa do projeto para **Programação Orientada a Objetos**
- Implementação das classes: `Popup`, `PopupWithForm`, `PopupWithImage`, `Card`, `Section`, `FormValidator`
- Aplicação de **herança, polimorfismo, encapsulamento e abstração**
- Separação modular do código JavaScript em `/components` e `/utils`
- Migração para **estrutura de pastas mais organizada e escalável**
- Inclusão da pasta `.vscode` com configurações personalizadas
- Melhoria da semântica e responsividade da interface

---

- Complete restructuring of the project for **Object-Oriented Programming**
- Implementation of the classes: `Popup`, `PopupWithForm`, `PopupWithImage`, `Card`, `Section`, `FormValidator`
- Application of **inheritance, polymorphism, encapsulation, and abstraction**
- Modular separation of JavaScript code into `/components` and `/utils`
- Migration to a **more organized and scalable folder structure**
- Inclusion of the `.vscode` folder with custom settings
- Improved interface semantics and responsiveness

---

## 🚧 **Próximos Passos / Next Steps**

- [ ] 🔄 Implementar persistência de dados via **LocalStorage**
- [ ] 🌐 Integrar o projeto com uma **API externa** (Node.js ou JSON Server)
- [ ] 🔐 Adicionar sistema de **autenticação e login**
- [ ] 🧩 Criar novos componentes reutilizáveis em JavaScript
- [ ] 🎨 Adicionar **animações suaves em CSS** para popups e interações
- [ ] 🧠 Refatorar para o uso de **módulos ES6** com import/export organizados

---

- [ ] 🔄 Implement data persistence via **LocalStorage**
- [ ] 🌐 Integrate the project with an **external API** (Node.js or JSON Server)
- [ ] 🔐 Add an **authentication and login** system
- [ ] 🧩 Create new reusable JavaScript components
- [ ] 🎨 Add **smooth CSS animations** for popups and interactions
- [ ] 🧠 Refactor to use **ES6 modules** with organized import/export

---

## 👨‍💻 **Créditos / Author**

**Marcio Perusin**

- Desenvolvedor Full-Stack (em formação) – Bootcamp TripleTen
- GitHub: [https://github.com/Perozin](https://github.com/Perozin)
- LinkedIn: [https://www.linkedin.com/in/marcio-perozin](https://www.linkedin.com/in/marcio-perozin)

**PT-BR:** Desenvolvido por Márcio Persuin – foco em **POO, modularização e boas práticas de front-end moderno**
**EN:** Developed by Márcio Persuin – focused on **OOP, modularization, and modern front-end best practices**

---

## 📝 **Licença / License**

Este projeto é de uso educacional e não possui fins comerciais.
This project is for educational purposes only and has no commercial intent.
