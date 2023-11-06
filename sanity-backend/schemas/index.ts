import categories from './documents/categories'
import productDoc from './documents/productDoc'
import {SchemaTypeDefinition} from 'sanity'

import blockContent from './blockContent'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import {user, account, verificationToken} from 'next-auth-sanity/schemas'

const documents = [productDoc, categories, blockContent, user, account, verificationToken]

export const schemaTypes = [...documents]
