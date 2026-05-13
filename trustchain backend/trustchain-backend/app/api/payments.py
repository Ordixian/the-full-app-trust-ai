import os
import httpx
from fastapi import APIRouter, HTTPException, Form
from app.core.config import settings

router = APIRouter()

# Squad Sandbox URL
SQUAD_URL = "https://api-d.squadco.com/transaction/initiate"

@router.post("/initiate")
async def initiate_payment(
    email: str = Form(...),
    amount: float = Form(...),
    verification_id: str = Form(...)
):
    # Ensure your .env has the SQUAD_SECRET_KEY
    if not settings.SQUAD_SECRET_KEY:
        raise HTTPException(status_code=500, detail="Squad API key missing")

    headers = {
        "Authorization": f"Bearer {settings.SQUAD_SECRET_KEY}",
        "Content-Type": "application/json"
    }

    # Squad expects amount in Kobo (Amount * 100)
    payload = {
        "amount": int(amount * 100),
        "email": email,
        "currency": "NGN",
        "initiate_type": "inline",
        "metadata": {"verification_id": verification_id}
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(SQUAD_URL, json=payload, headers=headers)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.json())
        return response.json()
