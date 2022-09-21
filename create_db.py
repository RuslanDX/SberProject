from database import Base,engine
from models import Car

Base.metadata.create_all(engine)