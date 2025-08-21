# 🧪 Testes E2E com Cypress

## 🔎 Visão Geral
Este repositório contém testes automatizados utilizando **Cypress** para praticar cenários reais de QA em diferentes aplicações web.
  
Foram realizados testes em **três sites** com fluxos distintos:

- 🛒 [Saucedemo](https://www.saucedemo.com/v1/index.html) → Loja virtual fictícia para praticar login, adicionar produtos ao carrinho e checkout.  
- 👩‍💼 [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) → Sistema de RH open source, utilizado para testar autenticação, navegação no dashboard e formulários.  
- 📋 [Kanban App](https://kanban-dusky-five.vercel.app/) → Aplicação de quadros Kanban, onde foram validados criação, edição e movimentação de tarefas.  

## 🔎 Cenários implementados

Site |	Cenários testados
- Saucedemo |	Login válido e inválido, adicionar produto ao carrinho, validar checkout.
- OrangeHRM |	Login válido e inválido, acesso ao dashboard, busca de informações no menu, preencher informações.
- Kanban |	Criar nova tarefa, editar título, mover tarefas entre colunas.

---

## ⚙️ Pré-requisitos
VSCode + Cypress

- Abra o VSCode
- No terminal digite: npx cypress open  
- Clone o repositório:  https://github.com/AlexandreEXTREMAO/cypress.git

