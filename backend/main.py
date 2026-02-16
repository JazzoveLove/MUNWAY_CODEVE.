from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import ORIGINS
from routers import products

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)