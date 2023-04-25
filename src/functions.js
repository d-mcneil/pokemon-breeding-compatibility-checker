import { EGG_GROUP_CSS_VARIABLES } from "./constantsNonRedux";

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
    case "great-tusk":
      return "Great Tusk";
    case "scream-tail":
      return "Scream Tail";
    case "brute-bonnet":
      return "Brute Bonnet";
    case "flutter-mane":
      return "Flutter Mane";
    case "slither-wing":
      return "Slither Wing";
    case "sandy-shocks":
      return "Sandy Shocks";
    case "iron-treads":
      return "Iron Treads";
    case "iron-bundle":
      return "Iron Bundle";
    case "iron-hands":
      return "Iron Hands";
    case "iron-jugulis":
      return "Iron Jugulis";
    case "iron-moth":
      return "Iron Moth";
    case "iron-thorns":
      return "Iron Thorns";
    case "roaring-moon":
      return "Roaring Moon";
    case "iron-valiant":
      return "Iron Valiant";
    case "walking-wake":
      return "Walking Wake";
    case "iron-leaves":
      return "Iron Leaves";
    case "wo-chien":
      return "Wo-Chien";
    case "chien-pao":
      return "Chien-Pao";
    case "ting-lu":
      return "Ting-Lu";
    case "chi-yu":
      return "Chi-Yu";
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

export const cleanEggGroupName = (name) => {
  switch (name) {
    case "no-eggs":
      return "No-Eggs";
    case "ground":
      return "Field";
    case "humanshape":
      return "Human-Like";
    case "plant":
      return "Grass";
    case "indeterminate":
      return "Amorphous";
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

export const fetchPictureUrl = (url = "") => {
  return fetch(url.replace("-species", ""))
    .then((response) => response.json())
    .then((data) => data.sprites.other["official-artwork"].front_default);
};

export const textColorStyle = (eggGroup) => ({
  color:
    EGG_GROUP_CSS_VARIABLES[
      `${cleanEggGroupName(eggGroup).toLowerCase().replace("-", "")}Border`
    ],
});

export const borderStyle = (eggGroup) =>
  `1px solid ${
    EGG_GROUP_CSS_VARIABLES[
      `${cleanEggGroupName(eggGroup).toLowerCase().replace("-", "")}Border`
    ]
  }`;

export const backgroundAndBorderStyle = (eggGroup) => ({
  backgroundColor: `rgba(${
    EGG_GROUP_CSS_VARIABLES[
      `${cleanEggGroupName(eggGroup).toLowerCase().replace("-", "")}Color`
    ]
  }, 0.5)`,
  border: borderStyle(eggGroup),
});
