export default {
  name: "benefits",
  type: "document",
  title: "Benefits section",
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
          ],
        },
      ],
    },
  ],
};
