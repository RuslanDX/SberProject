from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URI = "postgresql://postgres:password@localhost/cars"

engine = create_engine(DATABASE_URI, echo=True)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)
