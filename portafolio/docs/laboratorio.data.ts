import fs from 'node:fs'
import path from 'node:path'

export default {
  watch: ['./laboratorio/*.md'],

  load(archivos: string[]) {
    return archivos
      .filter(archivo => !archivo.endsWith('/index.md'))
      .map(archivo => {
        const contenido = fs.readFileSync(archivo, 'utf-8')

        const coincidenciaTitulo = contenido.match(/^#\s+(.+)$/m)

        const nombreArchivo = path.basename(archivo, '.md')

        return {
          titulo: coincidenciaTitulo
            ? coincidenciaTitulo[1]
            : nombreArchivo.replaceAll('-', ' '),

          url: `/laboratorio/${nombreArchivo}.html`
        }
      })
  }
}
