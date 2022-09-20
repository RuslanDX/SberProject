from sqlalchemy import Column, Float, String, Date
from sqlalchemy.orm import sessionmaker
from database import Base, engine


class Car(Base):
    __tablename__ = "automobile_info"
    SerialNumber = Column(String, primary_key=True)
    AutoModel = Column(String)
    AutoOwner = Column(String)
    AutoMileage = Column(Float)


Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autoflush=False, bind=engine)
