/* tslint:disable */

/**
 * AUTO-GENERATED FILE @ 2020-02-17 17:22:52 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres://username:password@localhost:55432/users -t note -t comment -s public
 *
 */

export namespace noteFields {
    export type title = string;
    export type description = string;
    export type id = number;

}

export interface note {
    title: noteFields.title;
    description: noteFields.description;
    id: noteFields.id;

}

export namespace commentFields {
    export type title = string;
    export type description = string;
    export type id = number;

}

export interface comment {
    title: commentFields.title;
    description: commentFields.description;
    id: commentFields.id;

}
