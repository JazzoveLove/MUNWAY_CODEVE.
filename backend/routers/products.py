from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import select, Session
from sqlalchemy.orm import selectinload
from database import get_session
from models import Product, ProductRead

router = APIRouter(prefix="/products", tags=["products"])

@router.get("")
def read_products(db: Session = Depends(get_session)):
    products = db.exec(select(Product)).all()
    return products

@router.get("/{slug}", response_model=ProductRead)
def read_single_product(slug: str, db: Session = Depends(get_session)):
    statement = select(Product).where(Product.slug == slug).options(selectinload(Product.variations))
    product = db.exec(statement).first()
    
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    
    return product
