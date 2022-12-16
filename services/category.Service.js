class CategoriesService {
  constructor() {

    this.categories = [{
      id: 1,
      name: 'Electrodomesticos',
      description: 'bla bla bla'
    },
    {
      id: 2,
      name: 'Electrodomesticos',
      description: 'bla bla bla'
    }];
  }

  find() {
    return this.categories;
  }

  // findOne(){
  //   router.get('/categories/:categoryId/products/:productId', (req, res) => {
  //     const { categoryId, productId } = req.params;
  //     res.json({
  //       categoryId,
  //       productId,
  //       name: 'Product',
  //       price: 1200,
  //       description: 'blan blan bla'
  //     });
  // }

  create(data) {
    const newCategori = {
      id: 3,
      ...data
    }
    this.categories.push(newCategori);
    return newCategori;
  }
}

module.exports = CategoriesService;
