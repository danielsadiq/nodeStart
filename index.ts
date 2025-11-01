import express, {Request, Response}  from "express";

const app = express();
const PORT = 4000;
const products = [
  {id: 1, name: "Product A", price:20},
  {id: 2, name: "Product B", price:20},
  {id: 3, name: "Product C", price:20},
]

app.get("/products", (req:Request, res:Response)=> {
  res.json({message: "Products receives successfully", products});
});

app.get("/products/:id", (req:Request, res:Response)=> {
  const productId = req.params.id;
  console.log("Product ID:", productId)
})

app.listen(PORT, ()=> {
  console.log(`Server is running on http://localhost:${PORT}`);
})