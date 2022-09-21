from sqlalchemy import create_engine, select, Table, Column, VARCHAR, Float, String, MetaData, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from fastapi import Depends, FastAPI, Body
from fastapi.responses import JSONResponse, FileResponse
from sqlalchemy.orm import sessionmaker
from fastapi_pagination import Page, LimitOffsetPage, add_pagination, Params
from fastapi_pagination.bases import RawParams, AbstractParams
from fastapi_pagination.ext.sqlalchemy import paginate

# Define Base
Base = declarative_base()

# # Set a customized params for page
# class Params(Base, AbstractParams):
#     page:int
#     per_page: int
#
#     def to_raw_params(self) -> RawParams:
#         return RawParams(
#             per_page = self.per_page
#             page=s
#             offset=self.total_items * self.return_per_page,
#         )

# DEFINE THE DATABASE CREDENTIALS
user = 'postgres'
password = 'd19995678'
host = 'localhost'
port = 5432
database = 'Cars_Test_Database'

# Create Engine
engine = create_engine(url="postgresql://{0}:{1}@{2}:{3}/{4}".format(user, password, host, port, database, echo=True))

# Define a Class that represents a table from PostgreSQL DBMS
class automobile_info(Base):
    __tablename__ = 'automobile_info'

    serialnumber = Column(VARCHAR(11), primary_key = True)
    automodel = Column(VARCHAR(40))
    autoowner = Column(VARCHAR(11))
    automileage = Column(float)

Base.metadata.create_all(bind=engine)

# Application Itself
app = FastAPI()

# Create a session with binding it to an existing engine
SessionLocal = sessionmaker(autoflush=False, bind=engine)

# Determine a dependency
# Through this function object of database session is passed to processing function
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Main
@app.get("/")
def main():
    return FileResponse("public/index.html")

# Get a car by its serial number
@app.get("/car/{serialnumber}")
def get_car(serialnumber, db: SessionLocal = Depends(get_db)):
    # Get the car by its ID
    car = db.query(automobile_info).filter(automobile_info.serialnumber == serialnumber).first()
    # If car not found then returned a message with 404 code
    if car == None:
        return JSONResponse(status_code=404, content={"message": "Car not found"})

    db.commit()

    return car

# Delete a car by its serial number
@app.delete("/car/{serialnumber}")
def delete_car(serialnumber, db:SessionLocal = Depends(get_db)):
    car = db.query(automobile_info).filter(automobile_info.serialnumber == serialnumber).first()

    if car == None:
        return JSONResponse(status_code=404, content={"message": "Car not found"})

    db.delete(car)
    db.commit()

    return car

# Update information about a car
@app.put("/car")
def update_car(data=Body(), db:SessionLocal = Depends(get_db)):
    car = db.query(automobile_info).filter(automobile_info.serialnumber == data["serialnumber"]).first()
    if car == None:
        return JSONResponse(status_code=404, content={"message": "Car not found"})
    # Update necessary fields
    car.serialnumber = data["serialnumber"]
    if data["automodel"] != None:
        car.automodel = data["automodel"]
    if data["autoowner"] != None:
        car.autoowner = data["autoowner"]
    if data["automileage"] != None:
        car.automileage = data["automileage"]

    db.commit()
    db.refresh(car)

    return car

# Add new automobile into the table
# Note: if auto exists then refresh it's information
@app.post("/car")
def add_car(data = Body(), db: SessionLocal = Depends(get_db)):
    car = automobile_info(serialnumber=data["serialnumber"], automodel=data["automodel"], autoowner=data["autoowner"], automileage=data["automileage"])
    car_found = db.query(data["serialnumber"]).filter(automobile_info.serialnumber == data["serialnumber"]).first()
    if car_found == None:
        db.add(car)
    else:
        car.serialnumber = data["serialnumber"]
        car.automodel = data["automodel"]
        car.autoowner = data["autoowner"]
        car.automileage = data["automileage"]

    db.commit()
    db.refresh(car)
    return car

# Get Query with pagination
@app.get("/car?page=&per_page=", response_model=Page[automobile_info])
def get_car_paginated(db: SessionLocal = Depends(get_db), params: Params = Depends(get_db)):
    return paginate(db.query(automobile_info).all(), params)

add_pagination(app)

