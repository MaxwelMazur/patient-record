list: 
	serverless invoke local -f listPatients   

deploy: 
	serverless deploy

deploy-qa:
	serverless deploy --stage qa

local:
	serverless offline

log: 
	serverless logs -f getPatients --tail
