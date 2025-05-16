from pyramid.config import Configurator
from .database import engine, Base
from sqlalchemy import engine_from_config
from .routes import includeme

def main(global_config, **settings):
    settings.setdefault('sqlalchemy.url', 'sqlite:///app.db')
    # Bind engine dan metadata
    Base.metadata.bind = engine
    config = Configurator(settings=settings)
    config.include(includeme)
    config.scan()
    return config.make_wsgi_app()
