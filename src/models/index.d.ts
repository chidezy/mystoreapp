import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ObjectModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ObjectModel {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ObjectModel, ObjectModelMetaData>);
  static copyOf(source: ObjectModel, mutator: (draft: MutableModel<ObjectModel, ObjectModelMetaData>) => MutableModel<ObjectModel, ObjectModelMetaData> | void): ObjectModel;
}