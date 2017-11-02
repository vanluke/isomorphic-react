import fs from 'fs';

const scriptFilesOrder = [
  {
    level: 1,
    name: 'manifest',
  },
  {
    level: 2,
    name: 'vendor',
  },
  {
    level: 3,
    name: 'polyfill',
  },
  {
    level: 4,
    name: 'main',
  },
];

export const getScriptsFilesNames = filePath => fs.readdirSync(filePath, 'utf-8') || [];
export const sortScripts = scripts => scripts
  .filter(item => scriptFilesOrder.find(so => item.indexOf(so.name) >= 0))
  .sort((x, y) => {
    const levelX = scriptFilesOrder.find(so => x.indexOf(so.name) >= 0);
    const levelY = scriptFilesOrder.find(so => y.indexOf(so.name) >= 0);
    return levelX.level - levelY.level;
  });
