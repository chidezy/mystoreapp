/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { ObjectModel } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ObjectCard from "./ObjectCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ObjectCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ObjectModel,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ObjectCardCollection")}
    >
      {(item, index) => (
        <ObjectCard
          obj={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ObjectCard>
      )}
    </Collection>
  );
}
