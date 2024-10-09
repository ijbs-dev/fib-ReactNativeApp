# FibonacciReactApp

Este projeto é um aplicativo em React Native que verifica se um número informado pertence à sequência de Fibonacci e exibe a sequência até o número informado.

## Visualização Detalhada

| Diretório do Projeto | Tela de Home |
| --- | --- |
| <img src="https://drive.google.com/uc?export=view&id=13zJvPG8cVvXIC-q-x-y4iCoB98cp-8SB" width="400"/> | <img src="https://drive.google.com/uc?export=view&id=12i9N0-KPPLEep43YsqjjiKkJRLKhO8Lp" width="400"/> |

## Funcionalidades em Ação

| **Inserindo número que `não` pertence à sequência Fibonacci** | **Inserindo número que `pertence` à sequência Fibonacci** |
| :---: | :---: |
| ![GIF 1 - Inserindo Novo Número](https://github.com/ijbs-dev/fib-ReactNativeApp/raw/main/mov/fib-react-native-00.gif) | ![GIF 2 - Verificando Outro Número](https://github.com/ijbs-dev/fib-ReactNativeApp/raw/main/mov/fib-react-native-01.gif) | 

<div align="center">

### Resetando valores
![GIF 3 - Limpando Informações](https://github.com/ijbs-dev/fib-ReactNativeApp/raw/main/mov/fib-react-native-02.gif)

</div>

## Requisitos

Antes de iniciar, certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (LTS)
- [Yarn](https://yarnpkg.com/) (opcional, mas recomendado)
- [Android Studio](https://developer.android.com/studio)
- Java 17 (necessário para o Android Gradle Plugin)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Instalação do Ambiente

### 1. Instalar Node.js e Yarn

Instale o Node.js, se ainda não estiver instalado, e o Yarn:

```bash
# Verificar instalação do Node.js
node -v

# Verificar instalação do Yarn (opcional)
yarn -v
```

### 2. Configurar o Android Studio

#### 2.1. Abra o **Android Studio** e configure o SDK:
   - No **SDK Manager**, certifique-se de que o **Android SDK Platform** mais recente e o **Android SDK Build-Tools** estão instalados.
   - Crie um emulador no **AVD Manager** (dispositivo virtual Android).

#### 2.2. Adicione as seguintes variáveis de ambiente ao seu arquivo `.bashrc` ou `.zshrc` (dependendo do shell que você utiliza):

```bash
# Configuração do Android SDK
export ANDROID_HOME=/home/seu_usuario/Android/Sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/tools/bin:$PATH

# Configuração do Java
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
```

3. Após adicionar essas variáveis, recarregue o shell:

```bash
source ~/.bashrc  # ou ~/.zshrc
```

### 3. Instalar Dependências

#### 3.1. Clone o repositório:

```bash
git clone https://github.com/seu_usuario/FibonacciReactApp.git
cd FibonacciReactApp
```

#### 3.2. Instale as dependências do projeto:

```bash
yarn install
# ou
npm install
```

### 4. Executando o Projeto

####  4.1. Iniciar o Metro Bundler

Em um terminal, dentro do diretório do projeto, inicie o servidor Metro:

```bash
npx react-native start
```

#### 4.2. Rodar o Projeto no Android

Abra um novo terminal no diretório do projeto e execute o seguinte comando:

```bash
npx react-native run-android
```

Isso irá compilar o projeto e instalar o aplicativo no emulador ou dispositivo conectado.

## 5. Problemas Comuns

#### 5.1. Erro `Unable to load script from assets 'index.android.bundle'`
Se você vir este erro ao rodar o aplicativo, certifique-se de que o Metro Bundler está rodando no terminal. Execute o comando:

```bash
npx react-native start
```

#### 5.2. Erro de Permissão `adb: Permission denied`
Se o `adb` não estiver funcionando corretamente, verifique se as variáveis de ambiente estão configuradas corretamente para usar o `adb` do SDK Android em **`$ANDROID_HOME/platform-tools`**.

---
