const paginate = (model, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    data: model.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(model.length / limit),
      totalItems: model.length,
      itemsPerPage: limit,
    },
  };
};

module.exports = { paginate };
