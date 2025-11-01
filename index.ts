import express, {Request, Response}  from "express";

const app = express();
const PORT = 4000;

app.use(express.json())
const products = [
  {id: 1, name: "Electric Cooker", price:10, category: "Electronics"},
  {id: 2, name: "Carrot", price:20, category: "Grocery"},
  {id: 3, name: "Iron", price:30, category: "Electronics"},
]

app.get("/products", (req:Request, res:Response)=> {
  const category = req.query.category as string | undefined;
  console.log(category)
  let filteredProducts = products
  if (category){
    filteredProducts = products.filter(prod =>
      prod.category.toLowerCase() === category.toLowerCase()
    )
  }
  res.json({message: "Products receives successfully", filteredProducts});
});

app.get("/products/:id", (req:Request, res:Response)=> {
  const productId = req.params.id;
  const product = products.find(prod => {
    if (productId && prod.id === parseInt(productId))  return prod
  })
  console.log("Product ID:", productId)
  if (product) res.json({message: "Products receives successfully", product})
  else res.json({message: "No product with this id :("})
})

app.post("/products", (req:Request, res:Response)=>{
  // console.log(req.body);
  products.push({id: products.length +1, ...req.body});
  console.log(products);

  return res.status(201).json({
    message: "Product successfully created",
    product: req.body
  })

})

app.listen(PORT, ()=> {
  console.log(`Server is running on http://localhost:${PORT}`);
})