from sqlmodel import SQLModel, create_engine, Session
import os
from dotenv import load_dotenv

# 1. Załaduj zmienne z pliku .env
load_dotenv()

# 2. Pobierz adres bazy danych
DATABASE_URL = os.getenv("DATABASE_URL")

# 3. Stwórz silnik (Engine) - to on gada z Supabase
engine = create_engine(DATABASE_URL)

# 4. Funkcja tworząca tabele (uruchomimy ją później)
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# 5. Funkcja do pobierania sesji (używana w każdym zapytaniu)
def get_session():
    with Session(engine) as session:
        yield session