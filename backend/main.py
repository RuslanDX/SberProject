from fastapi_pagination import Page, Params, LimitOffsetPage, add_pagination
from fastapi_pagination.ext.sqlalchemy import paginate
from pydantic import BaseModel
from fastapi import FastAPI, status, HTTPException, Depends
from backend.database import SessionLocal
import backend.models as models


class Car(BaseModel):  # serializer
    SerialNumber: str
    AutoModel: str
    AutoOwner: str
    AutoMileage: int

    class Config:
        orm_mode = True


app = FastAPI()

db = SessionLocal()


@app.get('/car/{id}', response_model=Car, status_code=status.HTTP_200_OK)
def getById(id: str):
    car = db.query(models.Car).filter(models.Car.SerialNumber == id).first()
    return car


@app.get("/car", response_model=Page[Car])
@app.get("/car/limit-offset", response_model=LimitOffsetPage[Car])
def get_car_paginated():
    return paginate(db.query(Car).all())
# @app.get('/car', response_model=Page[Car])
# def get_users(db: SessionLocal = Depends(get_db)):
#     return paginate(db.query(Car).all)


add_pagination(app)


@app.post('/car', response_model=Car)
def CreatePost(car: Car):
    new_car = models.Car(
        SerialNumber=car.SerialNumber,
        AutoModel=car.AutoModel,
        AutoOwner=car.AutoOwner,
        AutoMileage=car.AutoMileage
    )
    db_item = db.query(models.Car).filter(models.Car.SerialNumber == car.SerialNumber).first()

    if db_item == None:
        db.add(new_car)
    else:
        db_item.AutoModel = car.AutoModel
        db_item.AutoOwner = car.AutoOwner
        db_item.AutoMileage = car.AutoMileage
        db.refresh(db_item)

    db.commit()

    return new_car


@app.put('/car', response_model=Car, status_code=status.HTTP_200_OK)
def UpdatePostByPostId(id: str, car: Car):
    car_to_update = db.query(models.Car).filter(models.Car.SerialNumber == id).first()
    car_to_update.AutoModel = car.AutoModel
    car_to_update.AutoOwner = car.AutoOwner
    car_to_update.AutoMileage = car.AutoMileage

    db.commit()

    return car_to_update


@app.delete('/car/{id}')
def DeletePostByPostId(id: str):
    car_to_delete = db.query(models.Car).filter(models.Car.SerialNumber == id).first()
    if car_to_delete is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resource Not Found")

    db.delete(car_to_delete)
    db.commit()

    return car_to_delete
