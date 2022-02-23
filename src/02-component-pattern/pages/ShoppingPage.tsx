import {  ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import '../styles/custom-styles.css'

const product = {
id: 10,
title: 'Card coffee',
img: './coffee-mug.png'
}
export const ShoppingPage = () => {
  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr/>

        <div style={{
          display:'flex',
          flexDirection: 'row',
          flexWrap:'wrap'
        }}>
          
        {/* <ProductCard product={product}>

          <ProductCard.Image/>
          <ProductCard.Title title="cafe"/>
          <ProductCard.Button />
        </ProductCard> */}
{/* ////////////////////////////////////////////////// */}
        <ProductCard 
        className ="bg-dark"
        product={product}>

        <ProductImage className ='custom-image'/>
        <ProductTitle className = 'text-white'/>
        <ProductButtons className="custom-buttons" />

        </ProductCard>

        </div>
    </div>
  )
}
