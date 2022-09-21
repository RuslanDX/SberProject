from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import sessionmaker
from database import Base, engine


class Car(Base):
    __tablename__ = "automobile_info"
    SerialNumber = Column(String(20), primary_key=True)
    AutoModel = Column(String(40))
    AutoOwner = Column(String(40))
    AutoMileage = Column(Integer)

    def __repr__(self):
        return f"<Item SerialNumber={self.SerialNumber} AutoModel={self.AutoModel} AutoOwner={self.AutoOwner} AutoMileage={self.AutoMileage}>"


Base.metadata.create_all(bind=engine)
SessionLocal = sessionmaker(autoflush=False, bind=engine)
db = SessionLocal()