module.exports = {
  query: `
    sweetsCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      sweetsCount: {
        description: 'Return the count of sweets',
        resolverOf: 'application::sweets.sweets.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.sweets.services.sweets.count(options.where || {});
        },
      },
    },
  },
};