from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime

class Drop(SQLModel, table=True):
    __tablename__ = "drops"
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    release_date: datetime
    is_active: bool = Field(default=False)
    products: List["Product"] = Relationship(back_populates="drop")

class Product(SQLModel, table=True):
    __tablename__ = "products"
    id: Optional[int] = Field(default=None, primary_key=True)
    drop_id: int = Field(foreign_key="drops.id")
    name: str
    slug: str
    description: Optional[str] = None
    price: float
    drop: Optional["Drop"] = Relationship(back_populates="products")
    variations: List["ProductVariation"] = Relationship(back_populates="product")
    image: str

class ProductVariation(SQLModel, table=True):
    __tablename__ = "product_variations"
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id: int = Field(foreign_key="products.id")
    size: str
    color: str
    inventory_qty: int
    product: Optional["Product"] = Relationship(back_populates="variations")

class ProductRead(SQLModel):
    name: str
    slug: str
    price: float
    description: str | None = None
    variations: list[ProductVariation] = []
    image: str