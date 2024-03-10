 Q1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

# ans : The relationship between the "Product" and "Product_Category" entities is one-to-many, where each product can belong to only one category, but each category can have multiple products associated with it. This is achieved through the category_id field in the "Product" entity, which references documents in the "product_category" collection.

Q2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

# ans:  In the product schema definition,we ensures  that the category_id field is required. This ensures that every product record must have a category assigned to it.