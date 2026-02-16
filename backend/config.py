import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

ORIGINS = [
    "http://localhost:3000",  # Frontend
    "http://localhost:8000",  # Backend
]