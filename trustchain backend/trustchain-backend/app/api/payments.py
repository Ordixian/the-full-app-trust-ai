import os
import httpx
from fastapi import APIRouter, HTTPException, Form
from app.core.config import settings

router = APIRouter()

# Squad Sandbox URL for testing
SQUAD_URL = "https://sandbox-api-d.squadco.com/transaction/initiate"

@router.post("/initiate")
async def initiate_payment(
    email: str = Form(...),
    amount: float = Form(...),
    verification_id: str = Form(...)
):
    if not settings.SQUAD_SECRET_KEY:
        raise HTTPException(status_code=500, detail="Squad API key missing")

    headers = {
        "Authorization": f"Bearer {settings.SQUAD_SECRET_KEY}",
        "Content-Type": "application/json"
    }

    # Squad expects amount in Kobo (10000 = 100 NGN)
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
        
        # The frontend needs the 'checkout_url' from the data object
        return response.json()
