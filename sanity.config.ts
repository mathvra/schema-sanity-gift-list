import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {ptBRLocale} from '@sanity/locale-pt-br'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Lista de presentes Lays e Matheus',

  projectId: 'bzsm1r7r',
  dataset: 'production',

  plugins: [structureTool(), ptBRLocale(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
