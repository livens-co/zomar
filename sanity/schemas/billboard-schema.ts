const billboard = {
  name: "billboard",
  title: "Billboard",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
    },
    {
      name: "image",
      title: "Slika",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      name: "description",
      title: "Tekst",
      type: "string",
    },
  ],
};

export default billboard;
