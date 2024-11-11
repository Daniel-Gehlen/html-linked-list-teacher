module.exports = {
    preset: 'ts-jest',       // Usar ts-jest para compilar arquivos TypeScript
    testEnvironment: 'jsdom', "jest-environment-jsdom",// Use jsdom para emular um ambiente de navegador
    transform: {
      '^.+\\.ts$': 'ts-jest', // Transformar arquivos .ts usando ts-jest
      '^.+\\.tsx$': 'ts-jest', // Transformar arquivos .tsx usando ts-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'], // Suporte para extensões de arquivo .ts, .tsx e .js
    testMatch: [
      '**/tests/**/*.test.ts',   // Encontrar arquivos de teste dentro da pasta tests
      '**/?(*.)+(spec|test).ts', // Padrão para arquivos de teste
    ],
  };
  