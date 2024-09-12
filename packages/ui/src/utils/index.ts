export const truncateText = (text: string, length: number) => {
  if (text?.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};

export const parseJson = async (response: Response) => {
  const text = await response.text();
  try {
    const json = JSON.parse(text);
    return json;
  } catch (err) {
    return text;
  }
};
