export default {
  name: "services",
  type: "document",
  title: "Services section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "description",
              type: "string",
              title: "Description",
            },
            {
              name: "benefit",
              type: "string",
              title: "Benefit",
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      type: "string",
      title: "CTA",
    },
  ],
};
