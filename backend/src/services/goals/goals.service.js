// una forma de lograr vincular las rutas con el servidor, usando exports.nombreMetodo y en el server importar el script y asignarle el router

exports.getGoals = (req, res) => {
    // console.log("hoal")
    res.status(200).json({"mensaje":"respuesta desde goals"});
}