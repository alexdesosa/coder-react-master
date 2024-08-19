// Archivo JS y consta con una constante donde almacena un array (arreglo)
export const categories = [
  "Via Lactea",
  "Andromeda",
  "Triangulo",
  "Magallanes",
  "Contact",
  "About",
];

export const items = [
  {
    id: 1,
    name: "Tierra",
    description:
      "La Tierra es el tercer planeta del Sistema Solar, único conocido con vida. Tiene una atmósfera rica en oxígeno y agua líquida. Es un esferoide oblato con un diámetro de unos 12,742 km, y se compone de una corteza, manto y núcleo.",
    price: 100,
    stock: 10,
    category: ["Via Lactea"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036103/rqyngq05sn5zvvy64hgz.jpg",
  },
  {
    id: 2,
    name: "Marte",
    description:
      "Marte es el cuarto planeta del Sistema Solar, conocido como el planeta rojo por su superficie rica en óxidos de hierro. Tiene una atmósfera delgada compuesta principalmente de dióxido de carbono. Es más pequeño que la Tierra, con un diámetro de unos 6,779 km, y posee características geológicas como volcanes, valles y casquetes polares de hielo.",
    price: 150,
    stock: 15,
    category: ["Via Lactea"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036103/tblzgy5atbgzh4v4vgwb.jpg",
  },
  {
    id: 3,
    name: "Jupiter",
    description:
      "Júpiter es el quinto y mayor planeta del Sistema Solar, conocido por sus bandas de nubes y su Gran Mancha Roja, una enorme tormenta persistente. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio. Con un diámetro de unos 139,820 km, es 11 veces más grande que la Tierra. Tiene un sistema de anillos tenue y más de 79 lunas, incluyendo las grandes lunas galileanas: Ío, Europa, Ganimedes y Calisto.",
    price: 200,
    stock: 20,
    category: ["Via Lactea"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036103/sp2ukvgficqwuoggffb7.jpg",
  },
  {
    id: 4,
    name: "Zorath-7",
    description:
      "Zorath-7 es un exoplaneta ficticio situado a unos 350 años luz de la Tierra en la constelación de Orión. Es un super-Tierra, con un diámetro de 18,000 kilómetros, aproximadamente 1.4 veces el tamaño de nuestro planeta.",
    price: 250,
    stock: 5,
    category: ["Andromeda"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036103/orkoain2pcehkmfiy53s.jpg",
  },
  {
    id: 5,
    name: "Virelia-3",
    description:
      "Virelia-3 es un exoplaneta a 500 años luz de la Tierra en la constelación de Cygnus. Es una gigante gaseosa con un diámetro de 70,000 kilómetros. Su atmósfera, compuesta principalmente de hidrógeno y helio, tiene nubes de cristales de amoníaco, dándole un tono verde azulado. Tiene un sistema de anillos pronunciado y varias lunas heladas.",
    price: 300,
    stock: 15,
    category: ["Andromeda"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036104/mc5l0z5h1jcbp3fwfklv.jpg",
  },
  {
    id: 6,
    name: "Xyraxis-B",
    description:
      "Xyraxis-B es un exoplaneta situado a 450 años luz de la Tierra en la constelación de Andrómeda. Es una supertierra con un diámetro de 16,000 kilómetros, aproximadamente 1.25 veces el tamaño de nuestro planeta. Su atmósfera es densa y rica en dióxido de carbono y metano, con temperaturas superficiales muy altas. La superficie es volcánica y cubierta de vastos océanos de lava.",
    price: 350,
    stock: 20,
    category: ["Andromeda"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036104/ruadroflmlyx6vtvc4mp.jpg",
  },
  {
    id: 7,
    name: "Aurelia-9",
    description:
      " es un exoplaneta situado a 600 años luz de la Tierra en la constelación de Lyra. Es un mundo oceánico, con un diámetro de 14,000 kilómetros. Su superficie está cubierta en un 95% por un vasto océano de agua líquida, bajo una atmósfera espesa de vapor de agua y oxígeno. Aurelia-9 tiene una cadena de islas volcánicas y una biosfera rica en vida marina exótica. La atmósfera, rica en oxígeno y nitrógeno, permite cielos azul profundo con frecuentes tormentas tropicales.",
    price: 400,
    stock: 15,
    category: ["Triangulo"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036105/lbc1dk0yrzov1kqstip0.jpg",
  },
  {
    id: 8,
    name: "Nebulon-5",
    description:
      "Nebulon-5 es un exoplaneta situado a 750 años luz de la Tierra en la constelación de Carina. Es una subneptuno, con un diámetro de 30,000 kilómetros. Su atmósfera es gruesa y compuesta principalmente de hidrógeno, helio y neón, con nubes de metano que le dan un tono violeta. La superficie es una mezcla de vastos océanos de metano líquido y gigantescas tormentas. Nebulon-5 también tiene un sistema de anillos brillantes y múltiples lunas rocosas.",
    price: 450,
    stock: 17,
    category: ["Triangulo"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036105/hecrkyssrtmlkgrzr73y.jpg",
  },
  {
    id: 9,
    name: "Zephyra-12",
    description:
      "Zephyra-12 es un exoplaneta situado a 820 años luz de la Tierra en la constelación de Centaurus. Es una supertierra con un diámetro de 19,000 kilómetros, aproximadamente 1.5 veces el tamaño de nuestro planeta. Su atmósfera está compuesta de nitrógeno y oxígeno, con nubes de vapor de agua y amoníaco. La superficie está dominada por vastos desiertos y cadenas montañosas, intercaladas con grandes lagos de agua salada. Zephyra-12 experimenta estaciones extremas debido a su inclinación axial pronunciada, lo que resulta en veranos muy calurosos e inviernos extremadamente fríos.",
    price: 500,
    stock: 22,
    category: ["Triangulo"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036106/nobxh6hm8g4rd06fpfis.jpg",
  },
  {
    id: 10,
    name: "Luminara-4",
    description:
      "Luminara-4 es un exoplaneta ubicado a 1,200 años luz de la Tierra en la constelación de Hércules. Es un planeta rocoso con un diámetro de 12,000 kilómetros. Su atmósfera es ligera y rica en oxígeno y nitrógeno, con trazas de argón. La superficie está cubierta de vastas llanuras de cristal y formaciones de cristalización mineral que reflejan la luz de su estrella cercana, creando un brillo tenue y colorido. Luminara-4 tiene un clima moderado, con temperaturas agradables y cielos despejados casi todo el año.",
    price: 550,
    stock: 19,
    category: ["Magallanes"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036107/apumeiwiity60yv5pikb.jpg",
  },
  {
    id: 11,
    name: "Aurion-7",
    description:
      "Aurion-7 es un exoplaneta situado a 900 años luz de la Tierra en la constelación de Pegasus. Es un planeta rocoso con un diámetro de 15,000 kilómetros. Su atmósfera es rica en oxígeno y dióxido de carbono, con un cielo de color verde esmeralda debido a la presencia de gases específicos. La superficie está marcada por extensos bosques bioluminiscentes y océanos de agua con tonalidades de azul profundo. Aurion-7 tiene un clima templado, con estaciones suaves y un ciclo de días y noches prolongado debido a su rotación lenta.",
    price: 600,
    stock: 30,
    category: ["Magallanes"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036107/rvnwxeszd4utxxgjb35n.jpg",
  },
  {
    id: 12,
    name: "Inferna-3",
    description:
      "Inferna-3 es un exoplaneta situado a 400 años luz de la Tierra en la constelación de Ofiuco. Es un planeta rocoso con un diámetro de 13,000 kilómetros. Su atmósfera es densa y compuesta principalmente de dióxido de carbono y vapor de agua, creando un efecto invernadero extremo. La superficie está cubierta por vastos océanos de lava y zonas áridas con formaciones de rocas ígneas. Las temperaturas superficiales pueden superar los 800 grados Celsius, lo que provoca constantes erupciones volcánicas y tormentas de ceniza. La luz de su estrella cercana es intensa, creando un entorno extremadamente cálido y hostil.",
    price: 650,
    stock: 32,
    category: ["Magallanes"],
    image:
      "https://res.cloudinary.com/dtv0qsqrd/image/upload/v1723036107/jkl2vntgu7zetpyxepz8.jpg",
  },
];
