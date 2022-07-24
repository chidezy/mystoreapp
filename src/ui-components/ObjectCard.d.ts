/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { ObjectModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ObjectCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    obj?: ObjectModel;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ObjectCard(props: ObjectCardProps): React.ReactElement;
