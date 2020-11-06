# GoBarber Mobile

<p align="center">
  <img alt="Banner GoBarber" src="https://user-images.githubusercontent.com/18372991/98420645-6816a680-2066-11eb-9b84-1f4babb9c656.png">
</p>

------

GoBarber é uma plataforma para agendamento de serviços em barbearias. Desenvolvido durante o [Bootcamp GoStack](https://pages.rocketseat.com.br/gostack) 2020 @ [Rocketseat](https://rocketseat.com.br/)

<p align="center">
  <img alt="Banner GoBarber" width="600" src="https://user-images.githubusercontent.com/18372991/98420727-8a102900-2066-11eb-8d34-7519193926b3.png">
</p>

## Funcionalidades

- Listagem dos barbeiros/cabeleireiros disponíveis;

- Visualização dos horários disponíveis para barbeiro;

- Agendamento de atendimento com berbeiro;

- Fluxo básico de cadastro de usuário e acesso a conta.

## Ambiente de desenvolvimento

- Após clonar o repositório, instale as dependências do projeto rodando o comando `yarn`;

- Clone também o repositório do [backend do GoBarber](https://github.com/FusRoDah061/gostack-gobarber-backend) e deixe-o em execução;

- Crie um arquivo `.env.development` e configure o valor da chave `API_URL` apontando para o backend do passo anterior. O IP a ser configurado nessa chave pode ser obtido com o comando `ipconfig` (windows) ou `ifconfig` (linux);

- Para executar a aplicação, use o comando `yarn android`. Caso não exista algum dispositivo Android conectado, será iniciado o emulador.

## Contribuindo

Após realizar suas alterações no código, abra uma pull-request para a branch staging. Assim que for aprovada e mergeada, será gerada uma build de teste no [AppCenter](https://appcenter.ms).

As alterações só são replicadas para a master, caso a build de staging não contenha erros. Novo commits na master irão disparar o deploy para a PlayStore no AppCenter.
