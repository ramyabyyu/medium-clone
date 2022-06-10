export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comment won't show on the sites without approval",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "comment",
      type: "text",
      title: "Comment",
    },
    {
      name: "post",
      type: "reference",
      title: "Post",
      to: [{ type: "post" }],
    },
  ],
};
