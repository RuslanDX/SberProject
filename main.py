from pydantic import BaseModel
from fastapi import FastAPI, status, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from database import SessionLocal
import models


class Car(BaseModel): #serializer
    SerialNumber:str
    AutoModel:str
    AutoOwner:str
    AutoMileage:int

    class Config:
        orm_mode=True


app = FastAPI()
db = SessionLocal()


@app.get('/car/{id}', response_model=Car, status_code=status.HTTP_200_OK)
def getById(id: int):
    car = db.query(models.Car).filter(models.Car.id == id).first()
    return car


@app.get('/car', response_model=Car, status_code=status.HTTP_200_OK)
def getAll(page: int):
    pass


@app.post('/car', response_model=Car, status_code=status.HTTP_201_CREATED)
def CreatePost(car: Car):
    new_car = models.Car(
        SerialNumber=Car.SerialNumber,
        AutoModel=Car.AutoModel,
        AutoOwner=Car.AutoOwner,
        AutoMileage=Car.AutoMileage
    )

    db_item = models.query(models.Car).filter(car.SerialNumber == new_car.SerialNumber).first()

    if db_item is not None:
        UpdatePostByPostId(new_car.SerialNumber, new_car)
        return new_car

    db.add(new_car)
    db.commit()

    return new_car


@app.put('/car', response_model=Car, status_code=status.HTTP_200_OK)
def UpdatePostByPostId(SerialNumber: str, car: Car):
    car_to_update = db.query(models.Car).filter(models.Car.id == SerialNumber).first()
    car_to_update.AutoModel = car.AutoModel
    car_to_update.AutoOwner = car.AutoOwner
    car_to_update.AutoMileage = car.AutoMileage

    db.commit()

    return car_to_update


@app.delete('/car/{id}')
def DeletePostByPostId(id: int):
    car_to_delete = db.query(models.Car).filter(models.Car.id == id).first()
    if car_to_delete is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Resource Not Found")

    db.delete(car_to_delete)
    db.commit()

    return car_to_delete