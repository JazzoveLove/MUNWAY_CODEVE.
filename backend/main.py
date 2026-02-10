from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# To jest kluczowe, żeby Next.js mógł "rozmawiać" z Pythonem
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Na początek pozwalamy wszystkim, potem to zabezpieczymy
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Siema! MUNWAY_Codeve Backend działa!"}

@app.get("/sklep")
def get_store_info():
    return {
        "nazwa": "MUNWAY_Codeve",
        "status": "W budowie",
        "wlasciciel": "Maciej"
    }