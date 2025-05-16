from pyramid.view import view_config
from pyramid.response import Response
from .models import Matakuliah
from .database import SessionLocal

@view_config(route_name='get_matakuliah', renderer='json', request_method='GET')
def get_matakuliah(request):
    session = SessionLocal()
    matakuliahs = session.query(Matakuliah).all()
    session.close()
    return [
        {
            "id": m.id,
            "kode_mk": m.kode_mk,
            "nama_mk": m.nama_mk,
            "sks": m.sks,
            "semester": m.semester
        } for m in matakuliahs
    ]

@view_config(route_name='get_one_matakuliah', renderer='json', request_method='GET')
def get_one_matakuliah(request):
    session = SessionLocal()
    mk_id = int(request.matchdict['id'])
    mk = session.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    session.close()
    if mk:
        return {
            "id": mk.id,
            "kode_mk": mk.kode_mk,
            "nama_mk": mk.nama_mk,
            "sks": mk.sks,
            "semester": mk.semester
        }
    else:
        return Response(json_body={"message": "Matakuliah not found"}, status=404)

@view_config(route_name='create_matakuliah', renderer='json', request_method='POST')
def create_matakuliah(request):
    session = SessionLocal()
    data = request.json_body
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    session.add(mk)
    session.commit()
    session.close()
    return {"message": "Matakuliah created successfully."}

@view_config(route_name='update_matakuliah', renderer='json', request_method='PUT')
def update_matakuliah(request):
    session = SessionLocal()
    mk_id = int(request.matchdict['id'])
    data = request.json_body
    mk = session.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    if not mk:
        session.close()
        return Response(json_body={"message": "Matakuliah not found"}, status=404)
    mk.kode_mk = data.get('kode_mk', mk.kode_mk)
    mk.nama_mk = data.get('nama_mk', mk.nama_mk)
    mk.sks = data.get('sks', mk.sks)
    mk.semester = data.get('semester', mk.semester)
    session.commit()
    session.close()
    return {"message": "Matakuliah updated successfully."}

@view_config(route_name='delete_matakuliah', renderer='json', request_method='DELETE')
def delete_matakuliah(request):
    session = SessionLocal()
    mk_id = int(request.matchdict['id'])
    mk = session.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    if not mk:
        session.close()
        return Response(json_body={"message": "Matakuliah not found"}, status=404)
    session.delete(mk)
    session.commit()
    session.close()
    return {"message": "Matakuliah deleted successfully."}
