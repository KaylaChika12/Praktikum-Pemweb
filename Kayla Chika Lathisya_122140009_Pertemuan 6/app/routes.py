def includeme(config):
    config.add_route('get_matakuliah', '/matakuliah')
    config.add_route('get_one_matakuliah', '/matakuliah/{id}')
    config.add_route('create_matakuliah', '/matakuliah')
    config.add_route('update_matakuliah', '/matakuliah/{id}')
    config.add_route('delete_matakuliah', '/matakuliah/{id}')
