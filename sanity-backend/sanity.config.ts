import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '../sanity-backend/node_modules/@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'apple-redesign',

  projectId: 'yruul8tf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
