from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import sessionmaker
from database import Base, engine


class Car(Base):
    __tablename__ = "automobile_info"
    SerialNumber = Column(String, primary_key=True)
    AutoModel = Column(String)
    AutoOwner = Column(String)
    AutoMileage = Column(Integer)


Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autoflush=False, bind=engine)
db = SessionLocal()


def query(Car):
    return None