'use strict';

const patients = [
  {id: 1, nome: "Joao", birthday: 32},
  {id: 13, nome: "Pedro", birthday: 44},
  {id: 14, nome: "Zelia", birthday: 41}
];
  

module.exports.listPatients = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        patients
      },
      null,
      2
    ),
  };
};

module.exports.getPatient = async (event) => {
  const { patientId } = event.pathParameters;
  const patient = patients.find(p => p.id == patientId)

  if (patient === undefined) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "patient does not exist" }, null, 2)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        patient
      },
      null,
      2
    ),
  };
};
