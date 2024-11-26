import javascriptValidators from '../languages/javascript/validators.js';
import pythonValidators from '../languages/python/validators.js';
import typescriptValidators from '../languages/typescript/validators.js';
import rubyValidators from '../languages/ruby/validators.js';
import javaValidators from '../languages/java/validators.js';
import csharpValidators from '../languages/csharp/validators.js';
import cppValidators from '../languages/cpp/validators.js';
import goValidators from '../languages/go/validators.js';
import kotlinValidators from '../languages/kotlin/validators.js';

const validators = {
    javascript: javascriptValidators,
    python: pythonValidators,
    typescript: typescriptValidators,
    ruby: rubyValidators,
    java: javaValidators,
    csharp: csharpValidators,
    cpp: cppValidators,
    go: goValidators,
    kotlin: kotlinValidators
};

export default validators;