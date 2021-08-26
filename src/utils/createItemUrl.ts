export const createItemUrl = (id: number, name: string, model: string) => {
  return `${id}/${name.toLocaleLowerCase().replace(/[\s, '/']/g, "_")}_${model
    .toLocaleLowerCase()
    .replace(/[\s, '/']/g, "_")}`;
};
