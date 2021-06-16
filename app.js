import path from 'path'
import markdownMagic from 'markdown-magic'
import {markdownTable} from 'markdown-table'

function artifactsTable(content, _options = {}, config) {
  const result = markdownTable([
      ['Artifact', 'Commit'],
      ['<a href="https://github.com/dineshsonachalam/Lucid-Dynamodb/suites/2942883115/artifacts/67433873">Pytest Report 1</a>', '0123456789abcdef'],
      ['<a href="https://github.com/dineshsonachalam/Lucid-Dynamodb/suites/2942883115/artifacts/67433873">Pytest Report 2</a>', 'fedcba9876543210'],
      ['Developed by Dinesh Sonachalam']
  ])
  return result
}

const config = {
  transforms: {
    Artifacts_Table: artifactsTable,
  },
};
const markdownPath = path.join('./README.md')
markdownMagic(markdownPath, config)