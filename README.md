# 🌍 **web_project_around**

[![Preview do projeto](./src/images/preview-around.png)](https://perozin.github.io/web_project_around/src)

> 🎯 **Clique na imagem acima para acessar o projeto publicado**  
> 💡 **Click on the image above to access the published project**

---

## 🗣️ **README BILÍNGUE — Português / English**

---

## 🇧🇷 1. **Nome do Projeto**

**web_project_around**

---

## 🇧🇷 2. **Descrição do Projeto**

O **web_project_around** é uma aplicação web interativa desenvolvida durante o processo de aprendizagem do **Bootcamp de Desenvolvimento Web Full Stack**.

O projeto permite **visualizar, adicionar, editar e excluir cards** com imagens e legendas, além de **abrir popups interativos** para edição de perfil, atualização de avatar e visualização ampliada de imagens.

Inicialmente concebido sob o **paradigma da Programação Funcional**, o projeto foi **refatorado para o paradigma da Programação Orientada a Objetos (POO)**, promovendo **melhor organização, reutilização e escalabilidade do código**.

O código aplica conceitos como **herança, polimorfismo e encapsulamento**, além de utilizar **modularização ES6+**, a **metodologia BEM (Block Element Modifier)** para o CSS e uma **estrutura componentizada** na camada de scripts.

---

## 🇺🇸 1. **Project Name**

**web_project_around**

---

## 🇺🇸 2. **Project Description**

**web_project_around** is an interactive web application developed during the **Full Stack Web Development Bootcamp** learning journey.

It allows users to **view, add, edit, and delete cards** with images and captions, as well as **open interactive popups** for profile editing, avatar updating, and image zoom preview.

Originally designed using the **Functional Programming paradigm**, it was later **refactored into an Object-Oriented Programming (OOP) architecture**, improving **organization, reusability, and scalability**.

It demonstrates key OOP principles such as **inheritance, polymorphism, and encapsulation**, and implements **ES6+ modularization**, the **BEM methodology** for CSS, and **component-based JavaScript structure**.

---

## ⚙️ 3. **Tecnologias e Técnicas Utilizadas / Technologies & Techniques**

| Categoria / Category                      | Tecnologias e Técnicas / Technologies & Techniques                                                                |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Front-end**                             | HTML5, CSS3 (BEM), JavaScript (ES6+)                                                                              |
| **Paradigma / Paradigm**                  | Programação Orientada a Objetos / Object-Oriented Programming                                                     |
| **Arquitetura / Architecture**            | Módulos ES6 (`import` / `export`), Componentização                                                                |
| **Conceitos de POO / OOP Concepts**       | Herança, Polimorfismo, Encapsulamento e Abstração / Inheritance, Polymorphism, Encapsulation, and Abstraction     |
| **Layout Responsivo / Responsive Layout** | Media Queries, Flexbox, Grid Layout                                                                               |
| **Ambiente / Environment**                | Visual Studio Code (.vscode configurado), Git + GitHub                                                            |
| **Boas Práticas / Best Practices**        | Modularização, Reutilização, Semântica e Escalabilidade / Modularization, Reusability, Semantics, and Scalability |

---

## 🎥 4. **Demonstração em Vídeo / Video Demonstration**

🔗 https://www.loom.com/share/9f4b63da251f47d2b03a94cfd202466b

---

## 🧠 5. **Conceitos de POO Aplicados / OOP Concepts Implemented**

| Conceito / Concept                 | Descrição / Description                                                                                        | Exemplo / Example                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Herança / Inheritance**          | Reaproveitamento de código por meio de classes derivadas / Code reuse through derived classes                  | `PopupWithForm` e `PopupWithImage` herdam de `Popup`              |
| **Polimorfismo / Polymorphism**    | Sobrescrita e adaptação de métodos herdados / Overriding and adapting inherited methods                        | `open()` e `close()` redefinidos conforme o tipo de popup         |
| **Encapsulamento / Encapsulation** | Organização e proteção de propriedades internas / Organization and protection of internal properties           | Uso de atributos privados com prefixo `_`                         |
| **Abstração / Abstraction**        | Separação da lógica em classes genéricas e específicas / Separation of logic into generic and specific classes | `Card`, `Section`, `FormValidator` são classes coesas e autônomas |

---

## 🏗️ 6. **Estrutura de Arquivos / File Structure (BEM & Modularization)**

```
web_project_around/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── src/
│   ├── blocks/ → Estrutura CSS BEM
│   ├── components/ → Classes JS (OOP)
│   ├── pages/ → Scripts e estilos principais
│   ├── utils/ → Constantes e funções auxiliares
│   └── images/ → Recursos visuais do projeto
├── index.html
├── .editorconfig
├── .gitignore
├── .prettierignore
├── favicon.ico
└── README.md
```

---

## 🧩 7. **Principais Funcionalidades / Key Features**

✅ Exibição dinâmica de cards com imagens e legendas  
✅ Popups interativos para formulários e imagens ampliadas  
✅ Validação de formulários com mensagens em tempo real  
✅ Criação, edição e exclusão de elementos dinâmicos  
✅ Estrutura modularizada e orientada a objetos  
✅ Interface responsiva para múltiplos tamanhos de tela

---

## 🚀 8. **Como Executar / How to Run**

```bash
# 1️⃣ Clone o repositório / Clone the repository
git clone https://github.com/Perozin/web_project_around.git

# 2️⃣ Acesse a pasta do projeto / Access the project folder
cd web_project_around/src

# 3️⃣ Abra o arquivo no navegador / Open the file in your browser
index.html
```

💡 **Não requer servidor local — pode ser aberto diretamente no navegador.**  
💡 **No local server required — can be opened directly in your browser.**

---

## 🧾 9. **Resumo de Atualizações / Changelog**

### 🆕 Versão 2.0 — Refatoração para POO / OOP Refactor

- 🔧 Reestruturação completa com classes e modularização
- 🧩 Implementação de `Popup`, `Card`, `Section`, `FormValidator`
- 🧠 Aplicação de herança, polimorfismo, encapsulamento e abstração
- 📂 Organização de código em `/components` e `/utils`
- 📱 Melhoria de responsividade e acessibilidade
- 🌐 Integração com API externa (JSON Server)

---

## 🚧 10. **Próximos Passos / Next Steps**

- [ ] 🔄 Implementar persistência de dados com LocalStorage
- [ ] 🌐 Integrar com API externa (Node.js)
- [ ] 🔐 Adicionar autenticação e login
- [ ] 🧩 Criar novos componentes reutilizáveis
- [ ] 🎨 Adicionar animações em CSS
- [ ] 🧠 Refatorar imports/exports de forma mais organizada

---

## 👨‍💻 **Autor / Author**

**Márcio Perusin (Perozin)**  
Desenvolvedor Full Stack em formação — Bootcamp **TripleTen**

🔗 [GitHub](https://github.com/Perozin)  
🔗 [LinkedIn](https://www.linkedin.com/in/marcio-perozin)

📘 Foco em **POO, modularização e boas práticas de front-end moderno.**

---

## 📝 **Licença / License**

📄 Este projeto é de uso educacional e sem fins comerciais.  
📄 This project is for educational purposes only and has no commercial intent.
