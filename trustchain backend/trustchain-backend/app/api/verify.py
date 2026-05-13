import os
from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from app.services.ocr import extract_label_text  # Import your OCR service
from app.core.scoring import calculate_trust_score

router = APIRouter()

@router.post("/run")
async def verify_submission(
    product_name: str = Form(...),
    nafdac_no: str = Form(...),
    price: float = Form(...),
    vendor_name: str = Form(...),
    image: UploadFile = File(...)
):
    try:
        # 1. Save image temporarily to scan it
        temp_path = f"temp_{image.filename}"
        with open(temp_path, "wb") as buffer:
            buffer.write(await image.read())

        # 2. RUN REAL OCR
        scanned_text = extract_label_text(temp_path)
        
        # 3. Clean up the temp file
        os.remove(temp_path)

        # 4. Logic: Does the scanned text actually contain the NAFDAC number?
        is_nafdac_in_label = nafdac_no.upper() in scanned_text.upper()

        product_data = {
            "is_nafdac_valid": is_nafdac_in_label, 
            "price": price,
            "market_avg": 5000,
            "expiry_status": "active"
        }
        
        # Scoring logic remains the same
        analysis = calculate_trust_score(product_data, {"years_in_business": 2, "complaint_count": 0, "is_cac_registered": True})

        return {"id": "TRC-8847", "analysis": analysis}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
