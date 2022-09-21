from sqlalchemy import Column, Integer, Float, String
from sqlalchemy.orm import sessionmaker
from database import Base, engine


class Car(Base):
    __tablename__ = "automobile_info"
    serialnumber = Column(String, primary_key=True)
    automodel = Column(String)
    autoowner = Column(String)
    automileage = Column(Integer)


Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autoflush=False, bind=engine)
db = SessionLocal()
