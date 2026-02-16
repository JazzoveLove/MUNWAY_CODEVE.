from sqlmodel import Session, SQLModel
from database import engine
from models import Drop, Product, ProductVariation
from datetime import datetime


def seed_database():

    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)
    
    with Session(engine) as session:


        drop_v1 = Drop(
            name="MUNWAY FBI COLLECTION",
            release_date= datetime(2026, 3, 20, 18, 0, 0), 
            is_active=True
        )

        hoodie = Product(
            name="Oversize Heavy FBI HOODIE",
            slug="oversize-heavy-hoodie-black",
            description="Gruba bluza 480gsm, 100% bawełna organiczna.",
            price=29900,  # Cena w groszach (299.00 PLN)
            drop=drop_v1,
            image="/bluza1.jpg"
        )

        var_s = ProductVariation(
            size="S", 
            color="Black", 
            inventory_qty=10, 
            product=hoodie
        )
        
        var_m = ProductVariation(
            size="M", 
            color="Black", 
            inventory_qty=25, 
            product=hoodie
        )

        var_l = ProductVariation(
            size="L", 
            color="Black", 
            inventory_qty=15, 
            product=hoodie
        )

        session.add(drop_v1)
        session.add(hoodie)
        session.add(var_s)
        session.add(var_m)
        session.add(var_l)

        session.commit()
        
        print("✅ Sukces! Dane zostały dodane do bazy.")
if __name__ == "__main__":
    seed_database()