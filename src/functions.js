export const cleanPokemonName = (name) => {
  switch (name) {
    case "mr-mime":
      return "Mr. Mime";
    case "mime-jr":
      return "Mime Jr.";
    case "mr-rime":
      return "Mr. Rime";
    case "tapu-lele":
      return "Tapu Lele";
    case "tapu-bulu":
      return "Tapu Bulu";
    case "tapu-fini":
      return "Tapu Fini";
    case "tapu-koko":
      return "Tapu Koko";
    case "type-null":
      return "Type: Null";
    case "porygon-z":
      return "Porygon-Z";
    case "ho-oh":
      return "Ho-Oh";
    case "nidoran-f":
      return "Nidoran-F";
    case "nidoran-m":
      return "Nidoran-M";
    case "flabebe":
      return "Flabébé";
    case "sirfetchd":
      return "Sirfetch'd";
    case "farfetchd":
      return "Farfetch'd";
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

export const stringDexNumber = (number) => {
  const string = number.toString();
  switch (string.length) {
    case 1:
      return `000${string}`;
    case 2:
      return `00${string}`;
    case 3:
      return `0${string}`;
    default:
      return string;
  }
};
