const connect = require("../connect");

// agen_client: "soy pica"
// agen_data: "16/06/2023"
// agen_service: "Pintura"

const insertClient = async (_request, response) => {
    const { agen_cliet, agen_data, agen_serice } = _request.body
    const result = await connect.insertDate({agen_cliet, agen_data, agen_serice})
    return response.status(201).json(result)
}

module.exports = insertClient;