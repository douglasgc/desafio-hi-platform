# Contribuindo com a SYTI

## <a>Padrões de Mensagens de Commits</a>

Cada mensagem de commit consiste no seguinte formato:
```
<Tipo>(<Escopo>):<Mensagem>
```
### Tipo

* **build**: Alterações que afetam o sistema de gerenciamento de pacotes ou dependências externas (exemplo: yarn, broccoli, npm)
* **ci**: Alterações nos arquivos e scripts de configuração do Circle CI. (exemplo: Circle, BrowserStack, SauceLabs)
* **docs**: Alterações na documentação
* **feat**: Uma nova feature
* **fix**: Correção de um erro
* **perf**: Uma alteração de código que melhora o desempenho
* **refactor**: Uma Refatoração de código que não corrige um bug e nem adiciona um recurso
* **lint**: Alterações que não afetam o significado do código (exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.)
* **test**: Adicionando testes ausentes ou corrigindo testes existentes

### Escopo
O campo escopo refere-se a **Task**, **Módulo**, **Serviço** ou a **API** cujo qual está sendo realizado o commit.<br>
* exemplo de escopo como **Task**: sity-247, sity-254 <br>
* exemplo de escopo como **API**: driver-controller-getBanks, driver-service-getBaseData
* exemplo de escopo como **Serviço**: user, driver, common, admin, trips
* exemplo de escopo como **Módulo**: driver-controller, user-service, user-module

### Mensagem
O campo mensagem contém uma descrição breve e sucinta da mudança implementada. <br>
**Regras**
* Utilizar o presente imperativo: "Alterar" e não "Alterado" nem "Alterações"
* Não colocar a primeira letra maiúscula
* Não colocar (.) ao final da linha

### Exemplos de padrões de commits
```
feat(user-controller-validatePhone): criar API validatePhone
```
```
fix(driver-service-getBaseData): corrigir query de consulta ao banco
```
```
lint(admin): ajustar lints para o servico admin
```
```
test(driver-controller): criar testes para as APIs de controller do service driver
```
```
build(clients-dashboard): instalar pacote node-sass
```
```
refactor(driver-service-generateDriverCodes): refatorar query de pesquisa ao banco
```
```
docs(sity-245): criar o documento CONTRIBUTING.md com a padronização dos commits
```

### Submetendo uma Pull Request
1. Verifique se não existe nenhuma **Pull Request** pendende. Se sim, **aprova-la**.
2. Certifique-se que o nome da branch corresponde ao **escopo** da feature que você está implementando, corrigindo ou documentando
3. Crie e faça suas alterações na branch
```
git checkout -b my-branch
```
4. Envie somente sua branch
```
git push origin my-branch
```
5. No GitHub envie a **Pull Request** para `main:master`
6. Quest Complete!

