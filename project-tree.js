import fs from 'fs'
import path from 'path'

// 巢狀結構的註解資料
const ANNOTATIONS = {
  app: {
    'app.vue': 'Nuxt 入口元件',
    assets: {
      css: {
        'main.css': '全域 CSS 樣式',
      },
    },
    components: {
      app: {},
      page: {},
      ui: {},
    },
  },
  public: {
    'favicon.ico': '網站圖示',
    'robots.txt': '搜尋引擎爬蟲設定',
  },
  '.editorconfig': 'EditorConfig 設定',
  '.gitignore': 'Git 忽略清單',
  '.prettierignore': 'Prettier 忽略清單',
  '.prettierrc.cjs': 'Prettier 設定',
  '.stylelintrc.cjs': 'Stylelint 設定',
  '.vscode': {},
  'eslint.config.mjs': 'ESLint 設定',
  'nuxt.config.ts': 'Nuxt 設定',
  'package.json': '專案依賴與指令',
  'package-lock.json': 'npm 鎖定檔',
  'project-tree.js': '產生專案結構的腳本',
  'README.md': '專案說明文件',
  'tsconfig.json': 'TypeScript 設定',
}

const EXCLUDE_FOLDERS = new Set(['.nuxt', '.output', '.vscode', 'node_modules', '.git'])

function getAnnotationFromNested(pathParts, tree) {
  for (const part of pathParts.slice(0, -1)) {
    if (!(part in tree) || typeof tree[part] !== 'object') return ''
    tree = tree[part]
  }
  const last = pathParts[pathParts.length - 1]
  if (typeof tree[last] === 'string') return tree[last]
  return ''
}

function listStructure(startPath, prefix = '', isLast = false, rootPath = '.') {
  const output = []
  try {
    const entries = fs.readdirSync(startPath).sort()
    const folders = entries.filter(
      (e) => fs.statSync(path.join(startPath, e)).isDirectory() && !EXCLUDE_FOLDERS.has(e)
    )
    const files = entries.filter((e) => fs.statSync(path.join(startPath, e)).isFile())
    const allEntries = [...folders, ...files]
    allEntries.forEach((entry, index) => {
      const fullPath = path.join(startPath, entry)
      const relPath = path.relative(rootPath, fullPath).replace(/\\/g, '/')
      const pathParts = relPath.split('/')
      const isLastEntry = index === allEntries.length - 1
      const connector = isLastEntry ? '└──' : '├──'
      const newPrefix = prefix + (isLast ? '   ' : '│  ')
      const annotation = fs.statSync(fullPath).isFile()
        ? getAnnotationFromNested(pathParts, ANNOTATIONS)
        : ''
      const annotationStr = annotation ? `  # ${annotation}` : ''
      output.push(`${prefix}${connector} ${entry}${annotationStr}`)
      if (fs.statSync(fullPath).isDirectory()) {
        output.push(...listStructure(fullPath, newPrefix, isLastEntry, rootPath))
      }
    })
  } catch {
    // 忽略讀取錯誤
  }
  return output
}

const outputMd = ['```bash', '/', ...listStructure('.'), '```']
fs.writeFileSync('project-tree.md', outputMd.join('\n'), 'utf-8')
