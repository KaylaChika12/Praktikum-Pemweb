from app.database import Base, engine
from app.models import Matakuliah

Base.metadata.create_all(bind=engine)
print("Database created and tables ready.")
