enum Languages {
  ENGLISH = "en",
  FRENCH = "fr",
}

export const getAppLanguages = (t: (key: string) => string) => [
  {
    label: t("language.english"),
    value: Languages.ENGLISH as string,
  },
  {
    label: t("language.spanish"),
    value: Languages.FRENCH as string,
  },
];

export const transformLanguageArray = (
  arr: { label: string; value: string }[]
): Record<string, string> => {
  return arr.reduce((acc, curr) => {
    acc[curr.value] = curr.label;
    return acc;
  }, {} as Record<string, string>);
};
