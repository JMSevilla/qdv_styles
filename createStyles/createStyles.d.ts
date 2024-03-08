import { StyleRules } from "@qodev/styles/withStyles";

/**
 * @param styles a set of style mappings
 * @returns the same styles that were passed in
 */
export default function createStyles<ClassKey extends string, Props extends {}>(
  styles: StyleRules<Props, ClassKey>
): StyleRules<Props, ClassKey>;
