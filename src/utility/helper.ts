export const normalizeCls = (
  classes: TemplateStringsArray,
  ...otherClasses: string[]
): string => {
  const allClasses = classes
    .concat(otherClasses)
    .filter((v, i, a) => a.indexOf(v) == i && !!v && v != " ")
    .map((v) => v.trim());

  return allClasses.join(" ").trim();
};
