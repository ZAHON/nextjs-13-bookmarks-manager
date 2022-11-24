module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,

    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
};
