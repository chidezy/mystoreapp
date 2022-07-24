// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ObjectModel } = initSchema(schema);

export {
  ObjectModel
};