from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

api_key = "a5ea06523734f9a84e325ff8471ac2cd396bff7f"

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/searchGames")
async def search_games(query: str = ""):
    payload = {
        "api_key":api_key,
        "query":query,
        "limit": 10,
        "format": "json",
        "resources": "game",
    }
    headers = {"user-agent": "gravie-developer-test"}
    r = requests.get(
        "https://www.giantbomb.com/api/search/",
        params=payload,
        headers=headers
    )
    print("jsonXXXX", r.text)
    return {"results": r.json()["results"]}