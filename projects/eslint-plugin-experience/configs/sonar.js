module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:sonarjs/recommended', 'plugin:sonar/recommended'],
            rules: {
                'sonar/for-in': 'off',
                'sonar/function-name': 'off',
                'sonar/max-union-size': 'off',
                'sonar/prefer-default-last': 'off',
                'sonarjs/cognitive-complexity': 'off',
                'sonarjs/max-switch-cases': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-identical-functions': 'off',
                'sonarjs/no-inverted-boolean-check': 'error',
                'sonarjs/no-nested-template-literals': 'off',
            },
        },
    ],
};