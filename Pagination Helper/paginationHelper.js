function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex >= this.pageCount() || pageIndex < 0) {
    return -1;
  } else {
    return pageIndex + 1 === this.pageCount()
      ? this.itemCount() % this.itemsPerPage
      : this.itemsPerPage;
  }
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex >= this.itemCount() || itemIndex < 0) {
    return -1;
  } else {
    return Math.floor(itemIndex / this.itemsPerPage);
  }
};
