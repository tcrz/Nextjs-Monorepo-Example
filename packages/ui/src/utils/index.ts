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

export function getInitials(fullName: string | null): string {
  if (!fullName || !fullName.trim()) {
    return "";
  }

  const words = fullName.trim().split(/\s+/); // Split by one or more spaces

  if (words.length === 0) {
    return "";
  }

  // Extract initials from the first and last words
  const firstInitial = words[0]?.[0]?.toUpperCase() || "";
  const lastInitial = words.length > 1 ? words[words.length - 1]?.[0]?.toUpperCase() || "" : "";

  return `${firstInitial}${lastInitial}`;
}

